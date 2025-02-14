import { z } from "zod";

const createBookValidationSchema = z.object({
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
  }),
});

const updateBookValidationSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, "Title is required")
      .transform((val) => val.trim())
      .refine((val) => val.length > 0, "Title cannot be empty")
      .optional(),
    author: z
      .string()
      .min(1, "Author is required")
      .transform((val) => val.trim())
      .optional(),
    price: z.number().positive("Price must be a positive number").optional(),
    category: z
      .enum(["Fiction", "Science", "SelfDevelopment", "Poetry", "Religious"])
      .optional(),
    description: z.string().min(1, "Description is required").optional(),
    quantity: z
      .number()
      .int("Quantity must be an integer")
      .nonnegative("Quantity cannot be negative")
      .optional(),
    inStock: z.boolean().optional(),
  }),
});

export const BookValidationSchemas = {
  createBookValidationSchema,
  updateBookValidationSchema
};
