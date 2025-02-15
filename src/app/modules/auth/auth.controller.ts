import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await AuthServices.registerIntoDB(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User Registration Completed",
    data: result,
  });
});

export const authControllers = {
  registerUser,
};
