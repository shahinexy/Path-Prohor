import { z } from "zod";

const BookValidationSchema = z.object({
 body: z.object({
    title: z
    .string()
    .min(1, "Title is required")
    .transform((val) => val.trim())
    .refine((val) => val.length > 0, "Title cannot be empty"),
  author: z
    .string()
    .min(1, "Author is required")
    .transform((val) => val.trim()),
  price: z.number().positive("Price must be a positive number"),
  category: z.enum([
    "Fiction",
    "Science",
    "SelfDevelopment",
    "Poetry",
    "Religious",
  ]),
  description: z.string().min(1, "Description is required"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .nonnegative("Quantity cannot be negative"),
  inStock: z.boolean(),
 })
});

export const ValidationSchema = {
  BookValidationSchema,
};
