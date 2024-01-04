import { z } from "zod";

const months = z.enum([
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]);
const semesterNames = z.enum(['Summar', 'Autumn', 'Fall']);
const semesterCodes = z.enum(['01', '02', '03']);

const academicSemesterValidation = z.object({
  body: z.object({
    name: semesterNames,
    code: semesterCodes,
    year: z.string(),
    startMonth: months,
    endMonth: months,
  }),
});
const UpdateAcademicSemesterValidation = z.object({
  body: z.object({
    name: semesterNames.optional(),
    code: semesterCodes.optional(),
    year: z.string().optional(),
    startMonth: months.optional(),
    endMonth: months.optional(),
  }),
});

export const academicValidations = {
  academicSemesterValidation,
  UpdateAcademicSemesterValidation,
};