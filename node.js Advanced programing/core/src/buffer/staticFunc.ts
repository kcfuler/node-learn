namespace staticFunc {
  // concat , 拼接两个buffer
  let b1 = Buffer.from("拉钩");
  let b2 = Buffer.from("教育");
  let b3 = Buffer.concat([b1, b2], 9); //可以通过参数限制buffer的长度
  console.log(b3);
  console.log(b3.toString());
  // isBuffer() ， 判断是否是buffer类型
  let str = "123";
  console.log(Buffer.isBuffer(str));
}
