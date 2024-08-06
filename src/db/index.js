import mongoose from "mongoose";

const connectionDB = async () => {
  const connInstance = await mongoose.connect(process.env.MONGODB_URI);
  
  console.log(
    "MongoDB connected successfully...",
    connInstance.connection.host
  );
};

export default connectionDB;
