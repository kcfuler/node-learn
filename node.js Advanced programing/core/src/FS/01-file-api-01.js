const fs = require('fs');
const path = require('path');

//readFile 
//                path                  format     callback    
// fs.readFile(path.resolve("Data.txt"),"utf-8",(err, data)=>{
//   console.log(err);
//   console.log(data);
// })

// writeFile
// 如果文件不存在，会创建一个文件
// 而写文件则会报错。
// 第三个参数可以指定文件的格式和操作权限
// fs.writeFile('Data1.txt',"1111",{
//   mode:438,
//   flag:"w+",//这里使用r+ 会修改对应位置的文件内容，而w+会清空后重写
//   encoding:'utf-8'
// }, (err)=>{
//   if(!err){
//     fs.readFile("Data1.txt","utf-8",(err,data)=>{
//       console.log(data);
//       // console.log(err);
//     })
//   }else {
//     console.log(err);
//   }
// })

// appendFile ， 在文件内容的末尾来添加内容
// fs.appendFile('Data.txt','hahah',(err)=>{
//   console.log('write success');
// })

//copyFile
// fs.copyFile('Data.txt','Data1.txt',()=>{
//   console.log('拷贝成功！');
// })

//它们都是一次性转移数据，不适合进行大文件的操作

// watch File
// fs.watchFile('Data.txt',{interval:20},(curr,prev) => {
//   if(curr.mtime !== prev.mtime){
//     console.log('文件被修改了');
//     fs.unwatchFile('Data.txt'); //解除监控
//   }
// });