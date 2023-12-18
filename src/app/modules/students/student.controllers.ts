import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// handles req & res
const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;

    // will call service func to send the data
    const result = await StudentServices.createStudentIntoDb(student);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student succefully created',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.findAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Found All Students Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getOneStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await StudentServices.findOneStudent(id);
    res.status(200).json({
      success: true,
      message: 'Found the Student Successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
  getAllStudent,
  getOneStudent,
};
