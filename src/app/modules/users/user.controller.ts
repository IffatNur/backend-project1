import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendRespons";
import catchAsync from "../../utils/catAsync";


const createStudent = catchAsync(async (req, res) => {
    const user = req.body.user;
    // USING 'JOI'

    // const {error, value} = studentValidationSchemaJoi.validate(student)
    // // console.log({error}, {value});
    // if(error){
    //   res.status(500).json({
    //     success: false,
    //     message:'Something went wrong',
    //     error : error.details
    //   })
    // }

    // USING 'ZOD'
    // const zodParsedData = userValidationSchema.parse(user);

    // will call service func to send the data
    const result = await UserServices.createStudentIntoDb(user.password, user);
    // send response
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Student succefully created',
      data: result,
    })
})

export const UserController = {
  createStudent
} 