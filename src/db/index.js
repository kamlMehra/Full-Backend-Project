import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const app = express();
dotenv.config();
const port = process.env.PORT;
const connectionDB = async () => {
  try {
    const connInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully...",connInstance.connection.host);
      app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
      })
      app.get('/',(req,res)=>{
        res.send("hello world")
      })
  } catch (error) {
    console.log("The DataBase is Failed to Link",error)
  }
};

export default connectionDB;
