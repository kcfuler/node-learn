//使用open read write 几个 FS api 来完成文件的复制操作
const fs = require("fs");

const buf = Buffer.alloc(10);

const BUFFERSIZE = buf.length;
let readOffset = 0;

//这里使用的是相对路径
fs.open('a.txt' , 'r' ,(err , rfd)=>{
  fs.open('b.txt' , 'w' , (err , wfd)=>{
    //这里使用一个 next() 自调用函数来完成自动读取
    function next(){
      fs.read(rfd, buf, 0, BUFFERSIZE, readOffset ,(err, readBytes) => {
        // 没数据就读取不到了
        if(!readBytes){
          fs.close(rfd,()=>{});
          fs.close(wfd,()=>{});
          console.log('拷贝完成');
          return;
        }
        readOffset += readBytes;
        fs.write(wfd, buf , 0 , readBytes ,(err, written)=>{
          next();
        });
      })
    }
    next();//start
  })
})