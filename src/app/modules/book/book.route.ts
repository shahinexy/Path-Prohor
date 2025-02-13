import express from "express";
import { BookControllers } from "./book.controller";
import { ValidationSchema } from "./book.validation";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-book",
  validateRequest(ValidationSchema.BookValidationSchema),
  BookControllers.createBook
);

router.get("/", BookControllers.getBooks);

router.get("/:id", BookControllers.getSingleBook);

router.patch("/:id", BookControllers.updateSingleBook);

router.delete("/:id", BookControllers.deleteSingleBook);

export const BookRouters = router;
