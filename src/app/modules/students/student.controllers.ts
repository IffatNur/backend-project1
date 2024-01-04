
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendRespons';
import catchAsync from '../../utils/catAsync';
// import studentValidationSchemaJoi from './student.joi.validation';

// handles req & res
// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const student = req.body.student;

//     // USING 'JOI'

//     // const {error, value} = studentValidationSchemaJoi.validate(student)
//     // // console.log({error}, {value});
//     // if(error){
//     //   res.status(500).json({
//     //     success: false,
//     //     message:'Something went wrong',
//     //     error : error.details
//     //   })
//     // }

//     // USING 'ZOD'
//     const zodParsedData = studentZodSchema.parse(student);

//     // will call service func to send the data
//     const result = await StudentServices.createStudentIntoDb(zodParsedData);

//     // send response
//     res.status(200).json({
//       success: true,
//       message: 'Student succefully created',
//       data: result,
//     });
//   } catch (error: any) {
//     console.log(error);
//     res.status(500).json({
//       success: false,
//       message: error.message || 'Something went wrong',
//       data: error,
//     });
//   }
// };

const getAllStudent = catchAsync(async (
  req,
  res
) => {
    const result = await StudentServices.findAllStudentsFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student succefully created',
      data: result,
    })
  })

const getOneStudent= catchAsync(async (
  req,
  res
) => {
    const id = req.params.studentId;
    const result = await StudentServices.findOneStudent(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student succefully found',
      data: result,
    })
})

const deleteOneStudent = catchAsync(async (
  req,
  res
) => {
    const id = req.params.studentId;
    const result = await StudentServices.deleteOneStudent(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student succefully created',
      data: result
    })})

export const StudentController = {
  getAllStudent,
  getOneStudent,
  deleteOneStudent,
};
