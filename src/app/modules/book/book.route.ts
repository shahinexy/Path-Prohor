import express from "express";
import { BookControllers } from "./book.controller";
import { BookValidationSchemas } from "./book.validation";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/create-book",
  validateRequest(BookValidationSchemas.createBookValidationSchema),
  BookControllers.createBook
);

router.get("/", BookControllers.getBooks);

router.get("/:id", BookControllers.getSingleBook);

router.patch("/:id", BookControllers.updateSingleBook);

router.delete(
  "/:id",
  validateRequest(BookValidationSchemas.updateBookValidationSchema),
  BookControllers.deleteSingleBook
);

export const BookRouters = router;
