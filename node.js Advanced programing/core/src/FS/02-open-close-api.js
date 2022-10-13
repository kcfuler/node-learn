const fs = require('fs');
const path = require('path');

// open fd == file descriptor
fs.open(path.resolve('Data.txt'),'r',(err,fd)=>{
  console.log(fd);//输入输出占一个流，后面打开的流依次+1，node内部用于标识每一个流
  fs.close(fd,(err)=>{
    console.log('关闭成功');
  })
})

fs.open(path.resolve('Data1.txt'),"r",(err,fd) => {
  console.log(fd);
  fs.close(fd+1,(err)=>{
    console.log(err);
  })
})