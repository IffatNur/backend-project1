import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstname: z.string().min(1).max(20),
  middlename: z.string().optional(),
  lastname: z.string().refine((value) => /^[a-zA-Z]+$/.test(value), {
    message: 'Invalid last name',
  }),
});

const guardianvalidaitonSchema = z.object({
  fatherName: z.string(),
  fatherContact: z.number(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherContact: z.number(),
  motherOccupation: z.string(),
});

const localGuardianvalidaitonSchema = z.object({
  name: z.string(),
  contact: z.number(),
  address: z.string(),
});

const createStudentZodSchema = z.object({
  body: z.object({
    password: z.string(),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['Female', 'Male', 'Others']),
      email: z.string().email('Invalid email'),
      contact: z.string(),
      emergencyContact: z.string(),
      bloodGroup: z
        .enum(['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O+', 'AB-'])
        .optional(),
      presentAddress: z.string(),
      parmanentAddress: z.string(),
      guardian: guardianvalidaitonSchema,
      localGuardian: localGuardianvalidaitonSchema,
      admissionSemester: z.string(),
      profileIMG: z.string().optional(),
    }),
  }),
});

export const studentZodValidation = {
  createStudentZodSchema,
};
