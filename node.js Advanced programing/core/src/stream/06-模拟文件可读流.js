const fs = require('fs');
const EventEmitter = require('events');

class MyFIleReadStream extends EventEmitter{
  constructor(path , options){
    super()
    this.path = path;
    this.flags = options.flags || "r"
    this.mode = options.mode || 438
    this.autoClose =  options.autoClose || true
    this.start = options.start || 0 
    this.end = options.end
    this.highWaterMark = options.highWaterMark || 64 * 1024 // 64 kB

    this.open()
  }
  open() {
    // 原生 open 方法来打开指定位置上的文件
    fs.open(this.path)
  }
}

let rs = new MyFIleReadStream('test.txt');

rs.on('open' , (fd) => {
  console.log('open', fd)
})