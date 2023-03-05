import { promiseWaterfall } from './general';

describe('promiseWaterfall', () => {
  const makePromiseMockCb = <T>(
    value: T,
    onCallCb?: () => void,
    getsResolverFn?: (fn: () => void) => void
  ) => {
    return jest.fn(() => {
      onCallCb?.();

      if (!getsResolverFn) {
        return Promise.resolve(value);
      }

      return new Promise((resolve) => {
        getsResolverFn(() => resolve(value));
      });
    });
  };

  it('should return the array of unwrapped promise values', async () => {
    const promises = [
      makePromiseMockCb(1),
      makePromiseMockCb(2),
      makePromiseMockCb(3),
    ];

    const result = await promiseWaterfall(promises);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should call the promise callbacks in order', async () => {
    let timer = 0;
    const promiseOrderCalls = {
      0: 0,
      1: 0,
      2: 0,
    };

    const promises = [
      makePromiseMockCb(1, () => {
        promiseOrderCalls[0] = ++timer;
      }),
      makePromiseMockCb(2, () => {
        promiseOrderCalls[1] = ++timer;
      }),
      makePromiseMockCb(3, () => {
        promiseOrderCalls[2] = ++timer;
      }),
    ];

    await promiseWaterfall(promises);
    expect(promiseOrderCalls[0]).toBe(1);
    expect(promiseOrderCalls[1]).toBe(2);
    expect(promiseOrderCalls[2]).toBe(3);
  });

  it('waits for the previous promise to resolve before calling the next one', async () => {
    const NO_OP = () => {
      /**/
    };
    const promiseResolvers = {
      0: NO_OP,
      1: NO_OP,
      2: NO_OP,
    };

    const promises = [
      makePromiseMockCb(1, NO_OP, (resolve) => {
        promiseResolvers[0] = resolve;
      }),
      makePromiseMockCb(2, NO_OP, (resolve) => {
        promiseResolvers[1] = resolve;
      }),
      makePromiseMockCb(3, NO_OP, (resolve) => {
        promiseResolvers[2] = resolve;
      }),
    ];

    const arrayOfValuesPromise = promiseWaterfall(promises);

    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(promises[0]).toHaveBeenCalledTimes(1);
    await Promise.resolve();
    expect(promises[1]).not.toHaveBeenCalled();
    await Promise.resolve();
    expect(promises[2]).not.toHaveBeenCalled();

    promiseResolvers[0]();
    await Promise.resolve();
    expect(promises[0]).toHaveBeenCalledTimes(1);
    await Promise.resolve();
    expect(promises[1]).toHaveBeenCalledTimes(1);
    await Promise.resolve();
    expect(promises[2]).not.toHaveBeenCalled();

    promiseResolvers[1]();
    await Promise.resolve();
    expect(promises[0]).toHaveBeenCalledTimes(1);
    await Promise.resolve();
    expect(promises[1]).toHaveBeenCalledTimes(1);
    await Promise.resolve();
    expect(promises[2]).toHaveBeenCalledTimes(1);

    promiseResolvers[2]();
    expect(promises[0]).toHaveBeenCalledTimes(1);
    expect(promises[1]).toHaveBeenCalledTimes(1);
    expect(promises[2]).toHaveBeenCalledTimes(1);

    const arrayOfValues = await arrayOfValuesPromise;
    expect(arrayOfValues).toEqual([1, 2, 3]);
  });
});
