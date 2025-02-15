import express from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { AuthValidationSchemas } from "./auth.validation";

const router = express.Router();

router.post(
  "/register",
  validateRequest(AuthValidationSchemas.userRegisterValidationSchema),
  authControllers.registerUser
);



export const AuthRouters = router;
