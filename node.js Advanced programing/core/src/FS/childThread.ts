process.on("message", (data) => {
  console.info("Parent process a message", data);
});

process.send!({ type: "ack", data: [3] });
