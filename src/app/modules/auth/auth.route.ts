import express from "express";
import { BookControllers } from "./auth.controller";
import { BookValidationSchemas } from "./auth.validation";
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


export const BookRouters = router;
