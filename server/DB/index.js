import mongoose from "mongoose";
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};
export default async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://chat-app:1234@chat-app-q3o15.mongodb.net/chatApp",
      mongooseOptions
    );
    console.log("connect to the database");
  } catch (error) {
    console.log(error);
  }
}
