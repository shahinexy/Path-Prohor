import { OrderServices } from "./order.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createtOrderinDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.getAllOrderFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Order retrieved successfully",
    data: result,
  });
});

const getTotalRevenue = catchAsync(async (req, res) => {
  const result = await OrderServices.getTotalRevenueFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Total Revenue get successfully",
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getTotalRevenue,
  getAllOrder,
};
