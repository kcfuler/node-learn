/**
 * use Generics to define a call function , which can accept uncertain params
 *
 */

// looks very easy
function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}
