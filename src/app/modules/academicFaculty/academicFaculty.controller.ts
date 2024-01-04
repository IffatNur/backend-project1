import catchAsync from "../../utils/catAsync";
import sendResponse from "../../utils/sendRespons";
import { academicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async(req,res) =>{
  const facultyDetails = req.body;
  const result =
    await academicFacultyServices.createAcademicFacultyIntoDB(facultyDetails);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty succefully created',
    data: result,
  });
})

const getOneAcademicFaculty = catchAsync(async(req,res) =>{
  const id = req.params.facultyId;
  const result = await academicFacultyServices.getOneAcademicFacultyFromDB(id);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty found successfully',
    data: result,
  });
})

const getAllAcademicFaculty = catchAsync(async(req,res) =>{
  const result = await academicFacultyServices.getAllAcademicFacultyFromDB();
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty found successfully',
    data: result,
  });
})

const updateAcademicFaculty = catchAsync(async(req,res) =>{
  const id = req.params.facultyId;
  const facultyUpdate = req.body;
  const result = await academicFacultyServices.updateAcademicFacultyOfDB(
    id,
    facultyUpdate,
  );
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic faculty updated',
    data: result,
  });
})

export const academicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculty,
    getOneAcademicFaculty,
    updateAcademicFaculty
}