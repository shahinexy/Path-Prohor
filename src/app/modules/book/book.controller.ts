/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BookServices } from "./book.service";

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

const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await BookServices.deleteSingleBookFromDB(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book deleted successfully",
    data: result,
  });
});

// const searchBook = async (req: Request, res: Response, next: NextFunction): Promise<any> =>{
//     try {
//         const {searchTerm} = req.query;

//         if(!searchTerm || typeof searchTerm !== 'string'){
//             return res.status(400).json({message: 'Search term is required'})
//         }

//         const result = await BookService.searchBookFromDB(searchTerm)

//         if (result.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: `No Books found for the search term: "${searchTerm}"`,
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Searched Books get successfully',
//             data: result
//         })

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: 'Something went wrong',
//             data: error
//         })
//         next(error)
//     }
// }

export const BookControllers = {
  createBook,
  getBooks,
  getSingleBook,
  updateSingleBook,
  deleteSingleBook,
};
