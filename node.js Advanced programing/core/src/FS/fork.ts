import { fork } from "child_process";

let childThread = fork("./childThread.ts");

childThread.on("message", (data) => {
  console.info("Child process sent a message ", data);
});

childThread.send({ type: "syn", data: [3] });
