/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { BookServices } from "./demo.service";

const createBook = async (req: Request, res: Response) => {
  const result = await BookServices.createBookInDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
};

const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookServices.getAllBooksFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Gert All Books Successfully",
    data: result,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;

  const result = await BookServices.getSingleBookFromDB(productId);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Get The Book Successfully",
    data: result,
  });
});

const updateSingleBook = catchAsync(
  async (req: Request, res: Response): Promise<any> => {
    const { productId } = req.params;

    const result = await BookServices.getSingleBookFromDB(productId);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  }
);

const deleteSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { productId } = req.params;

  const result = await BookServices.deleteSingleBookFromDB(productId);

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
