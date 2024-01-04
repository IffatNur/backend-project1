import express from 'express';
import { UserController } from './user.controller';
import { studentZodValidation } from '../students/student.zod.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-user',
  validateRequest(studentZodValidation.createStudentZodSchema),
  UserController.createStudent,
);

export const UserRoute = router;