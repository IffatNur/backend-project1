import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { academicDeptValidation } from './academicDept.validation';
import { AcademicDeptControllers } from './academicDept.controller';

const router = express.Router();

router.post('/create-dept', validateRequest(academicDeptValidation.createAcademicDeptValidaitonSchema), AcademicDeptControllers.createAcademicDept);

router.get('/', AcademicDeptControllers.getAllAcademicDept);

router.get('/:deptId', AcademicDeptControllers.getAllAcademicDept);

router.patch('/:deptId', validateRequest(academicDeptValidation.updateAcademicDeptValidaitonSchema), AcademicDeptControllers.updateAcademicDept);

export const AcademicDeptRoutes = router;