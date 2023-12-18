import express from 'express';
import { StudentController } from './student.controllers';

const router = express.Router();

// will call controller
router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudent);

router.get('/:studentId', StudentController.getOneStudent);

export const StudentRoute = router;
