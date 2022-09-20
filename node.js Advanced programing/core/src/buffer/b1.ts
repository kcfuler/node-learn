//第一种创建buffer的方式
// const b1 = Buffer.alloc(10);
// console.log(b1);

//第二种创建方法 ， 不安全的方式
// const b2 = Buffer.allocUnsafe(10);
// console.log(b2);

// 第三种创建方式 from
// 可以接受三种数据了类型
// (data, encodeType, ) 存储的格式是十六进制
// const b3 = Buffer.from("121");
// console.log(b3);

// const b4 = Buffer.from([1, 3, 4]);
//在存入数据结构的时候，数据结构会被拆包
// console.log(b4);
//在调用 string 类型的时候，默认调用 utf-8 编码

// 使用buffer 来创建buffer
// 这种创建 Buffer的方式是开辟新空间，而不是使用老空间。
const b1 = Buffer.alloc(3);
const b2 = Buffer.from(b1);

console.log(b1);
console.log(b2);

//对buffer进行修改
b1[0] = 1;
console.log(b1);
console.log(b2);
