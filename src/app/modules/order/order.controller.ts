import { Request, Response } from "express";
import { OrderServer } from "./order.server";
import OrderValidationSchema from "./order.validation";


const createOrder = async (req: Request, res: Response) =>{
    try {
        const {order: orderData} = req.body;

        const validetData = OrderValidationSchema.parse(orderData)

        const result = await OrderServer.createtOrderinDB(validetData)

        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            data: error
        })
    }
}

const getAllOrder = async (req: Request, res: Response) =>{
    try {

        const result = await OrderServer.getAllOrderFromDB()

        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            data: error
        })
    }
}

const getTotalRevenue = async (req: Request, res: Response) =>{
    try {
        // const {order: orderData} = req.body;
        const result = await OrderServer.getTotalRevenueFromDB()

        res.status(200).json({
            success: true,
            message: 'Total Revenue get successfully',
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || 'Something went wrong',
            data: error
        })
    }
}

export const OrderController = {
    createOrder,
    getTotalRevenue,
    getAllOrder
}