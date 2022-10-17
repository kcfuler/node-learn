// Promise 接受执行函数 , 定义执行函数
type Executor<T, E extends Error> = (resolve: T, reject: E) => void;

class myPromise<T, E extends Error> {
  constructor(f: Executor<T, E>) {}
  then<U, F extends Error>(g: (result: T) => myPromise<U, F>): myPromise<U, F>;
  catch<U, F extends Error>(g: (error: E) => myPromise<U, F>): myPromise<U, F>;
}
