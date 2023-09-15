import pkg from "mongoose";

const { Schema, model } = pkg;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      required: true,
    },
    refreshToken: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("User", userSchema);
