import { model, Schema } from "mongoose";
import { Order } from "./order.interface";

const OrderSchema = new Schema<Order>(
  {
    email: { type: String, required: true },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const OrderModule = model<Order>("Order", OrderSchema);
