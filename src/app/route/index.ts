import express from "express";
import { OrderRouter } from "../modules/order/oder.route";
import { BookRouters } from "../modules/book/book.route";

const router = express.Router();

const moduleRouter = [
  {
    path: "/books",
    router: BookRouters,
  },
  {
    path: "/orders",
    router: OrderRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
