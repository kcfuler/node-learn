const { Readable } = require('stream');

// 模拟底层数据
let source = ["lg", "zce", "syy"];

//自定义继承 Readable 
class MyReadable extends Readable {
  constructor(source) {
    super()
    this.source = source;
  }
  _read() {
    let data = this.source.shift() || null;
    this.push(data);
  }
}

//实例化
let myReadable = new MyReadable(source);

// 暂停式的读取，类似迭代器
// 第一次开始读取的时候会读取两次，主要是执行时机的问题
// 在第一次之前，缓冲区里面已经有数据了
// myReadable.on('readable', () => {
//   let data = null;
//   while ((data = myReadable.read()) !== null) {
//     console.log(data.toString());
//   }
// })

// 持续性读取，不会将数据放入缓存区
myReadable.on('data', (chunk) => {
  console.log(chunk.toString());
})