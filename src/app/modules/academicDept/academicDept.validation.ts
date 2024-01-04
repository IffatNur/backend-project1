import { z } from "zod";

const createAcademicDeptValidaitonSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department should be string value',
      required_error: 'Academic department is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Acaademic faculty should be string value',
      required_error: 'Academic faculty is required',
    }),
  }),
});
const updateAcademicDeptValidaitonSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic department should be string value',
      required_error: 'Academic department is required',
    }).optional(),
    academicFaculty: z.string({
      invalid_type_error: 'Acaademic faculty should be string value',
      required_error: 'Academic faculty is required',
    }).optional(),
  }),
});

export const academicDeptValidation = {
    createAcademicDeptValidaitonSchema,
    updateAcademicDeptValidaitonSchema
}

