import { z } from "zod";

const createAcademicFacultySchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Faculty name should be a string',
    }),
  }),
});
const updateAcademicFacultySchema = z.object({
  body: z.object({
    name: z.string({
        invalid_type_error: 'Faculty name should be a string',
      })
      .optional(),
  }),
});


export const academicFacultyValidation = {
    createAcademicFacultySchema,updateAcademicFacultySchema
}