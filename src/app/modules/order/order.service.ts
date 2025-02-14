import status from "http-status";
import AppError from "../../error/AppError";
import { BookModle } from "../book/book.model";
import { Order } from "./order.interface";
import { OrderModule } from "./order.module";

const createtOrderinDB = async (payload: Order) => {
  const book = await BookModle.findById(payload.product);

  if (!book) {
    throw new AppError(status.NOT_FOUND,"Book not found");
  }

  if (book.quantity < payload.quantity) {
    throw new AppError(status.CONFLICT, "Not enough stock available");
  }

  book.quantity -= payload.quantity;
  await book.save();

  if (book.quantity <= 0) {
    book.inStock = false;
    await book.save();
  }

  const result = await OrderModule.create(payload);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModule.find().populate("product");
  return result;
};

const getTotalRevenueFromDB = async () => {
  const result = await OrderModule.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalPrice" },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  createtOrderinDB,
  getTotalRevenueFromDB,
  getAllOrderFromDB,
};
