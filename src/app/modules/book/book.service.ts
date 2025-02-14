import QueryBuilder from "../../builder/QueryBuilder";
import { TBook } from "./book.interface";
import { BookModle } from "./book.model";

const createBookInDB = async (BookData: TBook) => {
  const result = await BookModle.create(BookData);
  return result;
};

const getAllBooksFromDB = async (query: Record<string, unknown>) => {
  const bookSearchbleField = ["title", "author", "category", "description"];

  const bookQuery = new QueryBuilder(BookModle.find(), query)
    .search(bookSearchbleField)
    .paginate();

  const result = await bookQuery.modelQuery;

  return result;
};

const getSingleBookFromDB = async (id: string) => {
  const result = await BookModle.findById(id);
  return result;
};

const updateSingleBookFromDB = async (id: string, payload: Partial<TBook>) => {
  const result = await BookModle.findByIdAndUpdate(id, payload, {
    runValidators: true,
    new: true,
  });
  return result;
};

const deleteSingleBookFromDB = async (id: string) => {
  const result = await BookModle.findByIdAndDelete(id);
  return result;
};

export const BookServices = {
  createBookInDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateSingleBookFromDB,
  deleteSingleBookFromDB,
};
