import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true
    }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const UserModel = model("user", userSchema);

export default UserModel;
