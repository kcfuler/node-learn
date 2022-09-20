// 1. 资源消耗 : cpu 内存
// console.log(process.memoryUsage());
// console.log(process.cpuUsage());

// 2. 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env.NODE_ENV);
// console.log(process.env.PATH);
// console.log(process.env.USERPROFILE); // linux下就是 HOME

// console.log(process.platform);

// //运行状态：启动参数、PID、运行时间
// console.log(process.argv);
// console.log(process.argv0);
// console.log(process.pid);

// console.log(process.uptime());

// 4 事件
// 退出事件 , 这个事件只能执行同步代码
// process.on("exit", (code) => {
//   console.log("exit" + code);
// });
// //
// process.on("beforeExit", (code) => {
//   console.log("before exit", code);
// });
// console.log("代码执行完了");

// process.exit(); //主动退出

// 5 标准的 输入 输出 错误
//可以通过输入输出流来重写log函数

// console.log = function (data) {
//   process.stdout.write("-----" + data + "\n");
// };

// console.log("111");
// console.log("222");

//使用文件读写模块配合标准流来实现输出
// import fs from "fs";

// fs.createReadStream("test.txt").pipe(process.stdout);

//stdin 输入流
// process.stdin.pipe(process.stdout);

//可以订阅输入事件，然后对这个事件进行单独处理
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write("data" + chunk);
  }
});
