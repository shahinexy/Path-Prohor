import express from "express";
import { BookControllers } from "./demo.controller";

const router = express.Router();

router.post("/", BookControllers.createBook);

router.get("/", BookControllers.getBooks);

router.get("/:productId", BookControllers.getSingleBook);

router.put("/:productId", BookControllers.updateSingleBook);

router.delete("/:productId", BookControllers.deleteSingleBook);

export const BookRouters = router;
