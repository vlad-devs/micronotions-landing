export const throwingUninitialisedCtxDefault = <T extends object>(
  ctxName: string
) =>
  new Proxy<T>({} as T, {
    get() {
      throw new Error(`${ctxName} context provider is not initialised!`);
    },
  });

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const NO_OP = () => {};

export const NO_OP_RETURNING =
  <T>(value: T) =>
  () =>
    value;
