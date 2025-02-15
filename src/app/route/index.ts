import express from "express";
import { OrderRouter } from "../modules/order/oder.route";
import { BookRouters } from "../modules/book/book.route";
import { AuthRouters } from "../modules/auth/auth.route";

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
  {
    path: "/auth",
    router: AuthRouters,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
