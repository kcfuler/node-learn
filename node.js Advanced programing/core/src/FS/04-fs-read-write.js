const fs = require('fs');

// read : 所谓的读操作就是将数据从磁盘文件写入到buffer中
let buf = Buffer.alloc(10);

fs.open('Data.txt', 'r' , (err ,rfd) =>{
  console.log(rfd);
  // fd buffer offset length position  callback funtion
  fs.read(rfd,buf,0,4,0,(err , readBytes ,data)=>{
    console.log(readBytes);
    console.log(data.toString());
  })
})

console.log('-0--------------------------------------');

// write 将缓冲区里的内容写入到磁盘文件中
buf = Buffer.from('1234567890');

fs.open('b.txt','w',(err,wfd) => {
  fs.write(wfd, buf,0 , 3 , 0 , (err,written ,buffer) => {
    console.log(written); // 写入的字节数
    console.log(buffer);
    console.log(buffer.toString());
  })
  fs.close(wfd);
})
