// 在主线程中派生一个 worker 线程
let worker = new Worker("workerScript.ts");

// 给worker发送消息
worker.postMessage("some data");
