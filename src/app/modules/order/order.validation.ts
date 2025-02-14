import { z } from "zod";

const OrderValidationSchema = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    product: z.string().min(1, "Product is required"),
    quantity: z
      .number()
      .int("Quantity must be an integer")
      .positive("Quantity must be greater than zero"),
    totalPrice: z.number().positive("Total price must be greater than zero"),
  }),
});

export default OrderValidationSchema;
