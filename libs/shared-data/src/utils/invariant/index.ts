/**
 *
 */

const genericMessage = 'Invariant Violation';
const {
  setPrototypeOf = function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  },
} = Object;

export class InvariantError extends Error {
  framesToPop = 1;
  override name = genericMessage;
  constructor(message: string | number = genericMessage) {
    super(
      typeof message === 'number'
        ? `${genericMessage}: ${message} (please contact the author for support @vladdevs on Twitter)`
        : message
    );
    setPrototypeOf(this, InvariantError.prototype);
  }
}

export function invariant(
  condition: unknown,
  message?: string | number
): asserts condition {
  if (!condition) {
    throw new InvariantError(message);
  }
}

const verbosityLevels = ['debug', 'log', 'warn', 'error', 'silent'] as const;
export type VerbosityLevel = typeof verbosityLevels[number];
export type ConsoleMethodName = Exclude<VerbosityLevel, 'silent'>;
let verbosityLevel = verbosityLevels.indexOf('log');

function wrapConsoleMethod<M extends ConsoleMethodName>(name: M) {
  return function () {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      // Default to console.log if this host environment happens not to provide
      // all the console.* methods we need.
      const method = console[name] || console.log;
      // eslint-disable-next-line prefer-rest-params, @typescript-eslint/no-explicit-any
      return method.apply(console, arguments as any);
    }
  } as typeof console[M];
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace invariant {
  export const debug = wrapConsoleMethod('debug');
  export const log = wrapConsoleMethod('log');
  export const warn = wrapConsoleMethod('warn');
  export const error = wrapConsoleMethod('error');
}

export function setVerbosity(level: VerbosityLevel): VerbosityLevel {
  const old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}

export default invariant;
