import config from "../../config";
import { academicSemesterModel } from "../academicSemester/academicSemester.model";
import { TStudent } from "../students/student.interface";
import { Student } from "../students/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDb = async (password: string, payload: TStudent) => {
    // create a user object 
    const userData: Partial<TUser> = {}
    // if user does not provide password, use default pass 
    userData.password = password || (config.default_password as string);
  if(!password) {
    // 'as string' because the default pass is a string 
    password = config.default_password as string;
  }
//   set student role 
  userData.role = 'student'

  // find academic info 
  const academicSemesterInfo = await academicSemesterModel.findById(payload.admissionSemester);

  userData.id = await generateStudentId(academicSemesterInfo);

  const result = await User.create(userData); //built in static method

  if(Object.keys(result).length){
    payload.id= result.id; //embeded ID
    payload.user= result._id //referencing ID

    const newStudent = await Student.create(payload);
    return newStudent
  }
};

export const UserServices = {
  createStudentIntoDb,
}
