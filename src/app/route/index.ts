import express from "express";
import { DemoRouter } from "../modules/demo/demo.route";

const router = express.Router();

const moduleRouter = [
  {
    path: "/demo",
    router: DemoRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
