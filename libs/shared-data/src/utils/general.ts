export * as number from './number';
import { GenericFunctionalComponent, UnknownObject } from '../types';

export const getComponentName = (component: GenericFunctionalComponent) => {
  return component.displayName || component.name || 'Component';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const promiseWaterfall = async <T extends () => Promise<any>>(
  promisesCbs: T[]
) => {
  const unwrappedPromises = [] as Promise<
    T extends () => Promise<infer U> ? U : never
  >[];

  const callbackUnwrapper = (cb: T) => {
    return () => {
      const promise = cb();

      unwrappedPromises.push(promise);
      return promise;
    };
  };

  await promisesCbs.reduce((acc, cb) => {
    return acc.then(callbackUnwrapper(cb));
  }, Promise.resolve());

  return Promise.all(unwrappedPromises);
};

type ValueOf<T> = T[keyof T];

type MapTo<T, U> = {
  [P in keyof T]: U;
};

type Map<K extends string, V> = {
  [key in K]: V;
};

export function objectEntries<T extends object>(
  obj: T
): [keyof T, ValueOf<T>][] {
  return Object.entries(obj) as [keyof T, ValueOf<T>][];
}

// Changes both the key and the value of an object
export function mapObjectEntries<T extends object, NK extends string, NV>(
  mappingFn: (entry: [keyof T, ValueOf<T>]) => [NK, NV],
  obj: T
): Map<NK, NV> {
  return objectEntries(obj)
    .map(mappingFn)
    .reduce((acc, [newKey, newValue]) => {
      acc[newKey] = newValue;

      return acc;
    }, {} as Map<NK, NV>);
}

export function iterateObject<T extends object>(
  iteratorFn: (v: ValueOf<T>, k: keyof T) => void,
  obj: T
) {
  for (const keyName in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(keyName)) {
      iteratorFn(obj[keyName], keyName);
    }
  }
}

export function mapObject<T extends object, U>(
  mappingFn: (v: ValueOf<T>, k: keyof T) => U,
  obj: T
): MapTo<T, U> {
  const newObj = {} as MapTo<T, U>;

  iterateObject((oldValue, keyName) => {
    newObj[keyName] = mappingFn(oldValue, keyName);
  }, obj);

  return newObj;
}

export const asyncMapObject = async <T extends object, U>(
  mappingFn: (v: ValueOf<T>, k: keyof T) => Promise<U>,
  obj: T
): Promise<MapTo<T, U>> => {
  const newObj = {} as MapTo<T, U>;

  await Promise.all(
    objectEntries(obj).map(async ([keyName, oldValue]) => {
      newObj[keyName] = await mappingFn(oldValue, keyName);
    })
  );

  return newObj;
};

export const inverseMap = <T extends Record<string, string>>(obj: T) => {
  return mapObjectEntries(([key, value]) => [value, key], obj);
};

export const isObject = <T extends UnknownObject>(
  object: T | undefined | null
): object is T => typeof object === 'object' && !!object;

export const isDev = () => process.env['NODE_ENV'] === 'development';

export const unsafeCoerce = <V, R>(value: V): R => value as unknown as R;

export const identity = <T>(value: T) => value;
