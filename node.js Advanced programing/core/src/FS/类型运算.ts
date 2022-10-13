type ElementType<T> = T extends unknown[] ? T[number] : T; // 这里的 T[number] 是类型取值 ， 取出索引为数字的值的类型。

type A = ElementType<string[]>;


// 判断函数的参数传入的第二个参数的类型。
type SecondArg<T> = T extends (a:any , b : infer B) => any ? B : never;

type T = typeof Array['prototype']['slice'];

type secondArg = SecondArg<T>;


