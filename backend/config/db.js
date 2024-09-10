import mongoose from "mongoose";
const connectDb = async () => {
  try {
    console.log("Before connection");
    const connection = await mongoose.connect(process.env.MONGO_URI);

    console.log("Mongo Db is connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
