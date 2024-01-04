import express from 'express';
import { StudentController } from './student.controllers';

const router = express.Router();

// will call controller

router.get('/', StudentController.getAllStudent);

router.get('/:studentId', StudentController.getOneStudent);

router.delete('/:studentId', StudentController.deleteOneStudent);

export const StudentRoute = router;
