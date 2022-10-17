const fs = require('fs');
const vm = require('vm');

let content = fs.readFileSync("test.txt", "utf-8");

// //eval
// eval(content);//动态添加代码

// // New Function
// let fn = new Function('age', "return age + 1")

// console.log(age);
// console.log(fn());

// let age = 123;
vm.runInThisContext(content);// 动态加载外部js代码，和外部的执行环境是隔离的
// 只能使用全局变量，不能使用模块内的变量。
console.log(age);