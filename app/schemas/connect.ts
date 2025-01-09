import { z } from "zod";

export const connectSchema = z.object({
  firstname: z
    .string({ message: 'First name is required' })
    .min(1, 'First name should have at least 1 character'),
  lastname: z
    .string({ message: 'Last name is required' })
    .min(2, 'Last name should have at least 2 characters'),
  email: z
    .string()
    .email('Invalid email address')
    .optional()
    .or(z.literal('')),
  streetAddress: z
    .string()
    .optional()
    .or(z.literal('')),
  city: z
    .string()
    .optional()
    .or(z.literal('')),
  state: z
    .string()
    .optional()
    .or(z.literal('')),
  zip: z
    .string()
    .min(5, 'Zip code must have at least 5 digits')
    .optional()
    .or(z.literal('')),
  phone: z
    .string()
    .min(5)
    .max(20)
    .optional()
    .or(z.literal('')),
  firsttime: z
    .boolean({ message: 'Problem with first time choice' }),
  comment: z
    .string()
    .optional()
    .or(z.literal('')),
  callMe: z
    .boolean({ message: 'Problem with would like to talk to Pastor' })
});

export type Deal = z.infer<typeof connectSchema>;
