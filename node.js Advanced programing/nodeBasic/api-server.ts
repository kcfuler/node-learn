import express from "express";
import { DataStore } from "./data";

const app = express();

app.get("/", (req, res) => {
  // res.end("this is the response");
  res.json(DataStore.list);
});

app.listen(8080, () => {
  console.log("8080正在监听");
});
