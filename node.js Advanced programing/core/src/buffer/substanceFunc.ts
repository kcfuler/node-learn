let buf = Buffer.alloc(6);

// 1 fill 方法
// buf.fill("123", 1, 3); //第二个是指填充的起点，第三个是填充的终点
// console.log(buf);
//用我们提供的数据填满buffer的空间 ， 超过的数据会被截取
// console.log(buf.toString());
// buf.fill(123); // 字符串和数字填充的效果不同，内部编码方式不同
// console.log(buf.toString());

//2 write 方法
// buf.write("123", 1, 2); //第二个和第三个参数表示当前写入Buffer的长度
// console.log(buf);
// console.log(buf.toString());

// 3 toString
// buf = Buffer.from("我是你跌");
// console.log(buf);
// console.log(buf.toString("utf-8", 3, 9)); // 按位置进行提取

// slice 截取长度 --- 替换为subarray 来代替，是为了兼容性
// buf = Buffer.from("hello , the frontEnd");
// let b3 = buf.subarray(3, 9); // 顾头不顾尾的截取
// console.log(b3);
// console.log(b3.toString());

// indexOf  -- 由内容查找下标
// buf = Buffer.from("zce爱前端，爱学习,写东西");
// console.log(buf);
// console.log(buf.indexOf("爱", 4));

// copy
let b3 = Buffer.alloc(6);
let b4 = Buffer.from("拉钩");

b4.copy(b3);
console.log(b3);
console.log(b4);
