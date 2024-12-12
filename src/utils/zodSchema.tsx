import { z } from "zod";

export const schemaValidation = z.object({
  amount: z.string().min(1, "Field is required"),
  term: z.string().min(1, "Field is required"),
  rate: z.string().min(1, "Field is required").max(99),
  type: z.string({ required_error: "Field is required" }),
});

export type schemaValues = z.infer<typeof schemaValidation>;
