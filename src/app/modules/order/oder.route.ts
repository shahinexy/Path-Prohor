import express from 'express'
import { OrderController } from './order.controller'
import validateRequest from '../../middleware/validateRequest'
import OrderValidationSchema from './order.validation'

const router = express.Router()

router.post('/', validateRequest(OrderValidationSchema), OrderController.createOrder)

router.get('/', OrderController.getAllOrder)

router.get('/revenue', OrderController.getTotalRevenue)

export const OrderRouter = router;