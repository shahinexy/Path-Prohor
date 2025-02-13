import { TBook } from "./book.interface";
import { BookModle } from "./book.model";

const createBookInDB = async (BookData: TBook) => {
  const result = await BookModle.create(BookData);
  return result;
};

const getAllBooksFromDB = async () => {
  const result = await BookModle.find();
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

// const searchBookFromDB = async (searchTerm: string) =>{

//     const regexSearchTerm = new RegExp(searchTerm as string, 'i')

//     const result = await BookModle.find({
//         $or: [
//             {title: regexSearchTerm},
//             {author: regexSearchTerm},
//             {category: regexSearchTerm},
//         ]
//     })

//     return result
// }

export const BookServices = {
  createBookInDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateSingleBookFromDB,
  deleteSingleBookFromDB,
};
