import "dotenv/config";
import mongoose from "mongoose";
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connect(process.env.MONGO_CONNECTION_STRING!).then(() => {
  console.log("Mongoose Connected");
  app.listen(port, () => {
    console.log("Server Started on, Port: ", port);
  });
});
