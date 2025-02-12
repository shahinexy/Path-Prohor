import express from "express";
import { BookRouters } from "../modules/book/demo.route";

const router = express.Router();

const moduleRouter = [
  {
    path: "/demo",
    router: BookRouters,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
