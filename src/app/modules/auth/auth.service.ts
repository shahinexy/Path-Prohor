import status from "http-status";
import AppError from "../../error/AppError";
import { TRegistration } from "./auth.interface";
import { UserRegisterModel } from "./auth.model";

const registerIntoDB = async (payload: TRegistration) => {
  const isUserExists = await UserRegisterModel.findOne({
    email: payload.email,
  });

  if (isUserExists) {
    throw new AppError(status.BAD_REQUEST, "User already exists");
  }

  const result = await UserRegisterModel.create(payload);
  return result;
};



export const AuthServices = {
  registerIntoDB,
};
