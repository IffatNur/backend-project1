import { z } from 'zod';

const userValidationSchema = z.object({
    // password can be set or there will be a default password given 
  password: z
    .string() 
    .max(20, { message: 'Password should exceed 20 characters' })
    .optional(),
  
});

export default userValidationSchema;

