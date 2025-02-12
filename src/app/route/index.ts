import express from "express";

const router = express.Router();

const moduleRouter = [
  {
    path: "/",
    router: undefined,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.router));

export default router;
