import { Schema, model } from "mongoose";
import { TRegistration } from "./auth.interface";

const userSchema = new Schema<TRegistration>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

export const UseModel = model<TRegistration>("UserRegister", userSchema);
