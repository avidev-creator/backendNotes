import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    min: [8, "Password must be atleast 8, got{VALUE} "],
    max: 16,
  },
});

export const User = mongoose.model("User", userSchema);
