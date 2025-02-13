
import { BookModle } from "../book/book.model";
import { Order } from "./order.interface";
import { OrderModule } from "./order.module";

const createtOrderinDB = async (orderData: Order) => {
  const book = await BookModle.findOne({ _id: orderData.product });

  if (!book) {
    throw new Error("Book not found");
  }

  if (book.quantity < orderData.quantity) {
    throw new Error("Not enough stock available");
  }

  book.quantity -= orderData.quantity;
  await book.save();
  
  if (book.quantity <= 0) {
    book.inStock = false;
    await book.save();
  }

  const result = await OrderModule.create(orderData);
  return result;
};

const getAllOrderFromDB = async () =>{
  const result = await OrderModule.find()
  return result;
}

const getTotalRevenueFromDB = async () =>{
  const result = await OrderModule.aggregate([
    {
      $group:{
        _id: null,
        totalRevenue: {$sum: '$totalPrice'}
      }
    }
  ])

  return result.length > 0 ? result[0].totalRevenue : 0;
}

export const OrderServer = {
  createtOrderinDB,
  getTotalRevenueFromDB,
  getAllOrderFromDB
};
