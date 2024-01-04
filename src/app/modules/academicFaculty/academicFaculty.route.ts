import express from 'express';
import { academicFacultyControllers } from './academicFaculty.controller';
import validateRequest from '../../middleware/validateRequest';
import { academicFacultyValidation } from './academicFaculty.validation';

const router= express.Router();

router.post('/create-academic-faculty', validateRequest(academicFacultyValidation.createAcademicFacultySchema),  academicFacultyControllers.createAcademicFaculty);

router.get('/', academicFacultyControllers.getAllAcademicFaculty);

router.get('/:facultyId', academicFacultyControllers.getOneAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(academicFacultyValidation.updateAcademicFacultySchema),
  academicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;