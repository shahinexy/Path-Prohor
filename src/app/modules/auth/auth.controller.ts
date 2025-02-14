/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BookServices } from "./auth.service";

const createBook = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await BookServices.createBookInDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getBooks = catchAsync(async (req, res) => {
  const result = await BookServices.getAllBooksFromDB(req.query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Books are retrieved Successfully",
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookServices.getSingleBookFromDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Got The Book Successfully",
    data: result,
  });
});

const updateSingleBook = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await BookServices.updateSingleBookFromDB(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

export const BookControllers = {
  createBook,
  getBooks,
  getSingleBook,
  updateSingleBook
};
