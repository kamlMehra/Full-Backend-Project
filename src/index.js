import dotenv from "dotenv";
import express from "express";
import connectionDB from "./db/index.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
connectionDB().then(() => {
  app.listen(port, () => {
    console.log(`The port is listening on ${port}`);
  });
});
