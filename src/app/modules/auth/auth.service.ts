
import { TRegistration } from "./auth.interface";

const registerIntoDB = async (payload: TRegistration) => {
  const result = await UserModel.create(payload)
  return result;
};

// const getAllBooksFromDB = async (query: Record<string, unknown>) => {
//   const bookSearchbleField = ["title", "author", "category", "description"];

//   const bookQuery = new QueryBuilder(BookModle.find(), query)
//     .search(bookSearchbleField)
//     .paginate();

//   const result = await bookQuery.modelQuery;

//   return result;
// };

// const getSingleBookFromDB = async (id: string) => {
//   const result = await BookModle.findById(id);
//   return result;
// };

// const updateSingleBookFromDB = async (id: string, payload: Partial<TBook>) => {
//   const result = await BookModle.findByIdAndUpdate(id, payload, {
//     runValidators: true,
//     new: true,
//   });
  
//   return result;
// };


export const BookServices = {
  registerIntoDB,
  // getAllBooksFromDB,
  // getSingleBookFromDB,
  // updateSingleBookFromDB,
};
