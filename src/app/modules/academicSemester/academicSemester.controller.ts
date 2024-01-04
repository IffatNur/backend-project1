import catchAsync from "../../utils/catAsync";
import sendResponse from "../../utils/sendRespons";
import { AcademicSemesterservices } from "./academicSemester.service";

const createAcademicSemester = catchAsync(async(req, res) =>{
    const result = await AcademicSemesterservices.createAcademicSemesterIntoDB(req.body);
    
    // send response
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student succefully created',
      data: result,
    })
})

const findOneSemester = catchAsync(async(req,res) =>{
  const id = req.params.semesterId;
  const result = await AcademicSemesterservices.findOneSemesterFromDB(id);

  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester has been found successfully',
    data: result,
  });
})

const findAllSemester = catchAsync(async(req,res) =>{
  const result = await AcademicSemesterservices.findAllSemesterFromDB();

  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester has been found successfully',
    data: result,
  });
})


const updateSemester = catchAsync(async (req, res) => {
  const id = req.params.semesterId;
  const result = await AcademicSemesterservices.updateSemesterFromDB(
    id,
    req.body,
  );

  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Semester has been found successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  findOneSemester,
  findAllSemester,
  updateSemester,
};