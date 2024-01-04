import catchAsync from "../../utils/catAsync";
import sendResponse from "../../utils/sendRespons";
import { academiDeptServices } from "./academicDept.service";

const createAcademicDept = catchAsync(async(req,res) =>{
  const result = await academiDeptServices.createAcademicDept(req.body);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department successfully created',
    data: result,
  });
})
const getAllAcademicDept = catchAsync(async(req,res) =>{
  const result = await academiDeptServices.getAllAcademicDeptFromDB();
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department successfully retrieved',
    data: result,
  });
})
const getOneAcademicDept = catchAsync(async(req,res) =>{
    const id = req.params.deptId;
  const result = await academiDeptServices.getOneAcademicDeptFromDB(id);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department successfully retrieved',
    data: result,
  });
})
const updateAcademicDept = catchAsync(async(req,res) =>{
    const id = req.params.deptId;
    const body  = req.body;
  const result = await academiDeptServices.updateAcademicDeptOfDB(id, body);
  // send response
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic department successfully updated',
    data: result,
  });
})

export const AcademicDeptControllers = {
    createAcademicDept,
    getAllAcademicDept,
    getOneAcademicDept,
    updateAcademicDept
}