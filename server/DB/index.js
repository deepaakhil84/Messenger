import mongoose from "mongoose";
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};
export default async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_STRING_URL, mongooseOptions);
    console.log("connect to the database");
  } catch (error) {
    console.log(error);
  }
}
