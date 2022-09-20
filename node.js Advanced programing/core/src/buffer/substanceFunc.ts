let buf = Buffer.alloc(6);

// 1 fill 方法
// buf.fill("123", 1, 3); //第二个是指填充的起点，第三个是填充的终点
// console.log(buf);
//用我们提供的数据填满buffer的空间 ， 超过的数据会被截取
// console.log(buf.toString());
// buf.fill(123); // 字符串和数字填充的效果不同，内部编码方式不同
// console.log(buf.toString());

//2 write 方法
buf.write("123", 1, 2); //后面的两个参数同样是指定传入数据的起止位置
console.log(buf);
console.log(buf.toString());
