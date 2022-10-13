const fs = require('fs');

//  1. access | 可以用于判断是否具有操作权限
// fs.access('a.txt', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('有操作权限');
//   }
// })


// 2 . stat
// fs.stat('a.txt', (err, statObj) => {
//   // console.log(statObj);
//   console.table(statObj.size);
//   console.log(statObj.isFile());
//   console.log(statObj.isDirectory());
// })

// setTimeout(() => {
//   console.log('------------------------------------------------------------------------------------------------------');
// })

//3. mkdir
//创建路径的时候要确保父级目录是存在的
// fs.mkdir('c/d', { recursive: true }, (err) => {
//   if (!err) {
//     console.log('创建成功');
//   } else {
//     console.log(err);
//   }
// })

// 4. rmdir
// 加入 recursive 来删除嵌套目录
// fs.rmdir('c', { recursive: true }, (err) => {
//   if (!err) {
//     console.log('删除成功');
//   } else {
//     console.log(err);
//   }
// })

// 5. readdir
// fs.readdir('c', (err, files) => {
//   console.log(files);
// })

// 6.unlink
// 不一定是完全删除
// fs.unlink('c/b', (err) => {
//   if (!err) {
//     console.log('删除成功');
//   } else {
//     console.log(err);
//   }
// })