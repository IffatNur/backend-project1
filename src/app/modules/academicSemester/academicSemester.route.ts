import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middleware/validateRequest';
import { academicValidations } from './academicSemester.validation';

const router = express.Router();

router.post('/create-semester', validateRequest(academicValidations.academicSemesterValidation), AcademicSemesterControllers.createAcademicSemester)

router.get('/:semesterId', AcademicSemesterControllers.findOneSemester )

router.get('/', AcademicSemesterControllers.findAllSemester )

router.patch('/:semesterId', validateRequest(academicValidations.UpdateAcademicSemesterValidation), AcademicSemesterControllers.updateSemester);


export const AcademicSemesterRoute = router;