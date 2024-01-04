import { TAcedemicSemester } from "../academicSemester/academicSemester.interface";
import { User } from "./user.model";


const findLastStudentId = async() =>{
    const lastStudent = await User.findOne({
        role: 'student'
    },
    {
        id:1,
        _id:0
    }).sort({
        createdAt:-1
    }).lean()

    // id: 202302 0000 - here 4 digit value is needed
    return lastStudent?.id ? lastStudent.id : undefined
}

// set student automatically
export const generateStudentId = async(payload: TAcedemicSemester) => {
    // first time ID 0000
    let currentId = (0).toString();

    const lastStudent = await findLastStudentId();
    const lastStudentYear = lastStudent?.substring(0,4);
    const lastStudentCode = lastStudent?.substring(4,6);
    const currentStudentYear = payload.year;
    const currentStudentCode = payload.code;
    if(lastStudent && lastStudentYear === currentStudentYear && lastStudentCode === currentStudentCode){
        currentId = lastStudent.substring(6);
    }
    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
    incrementId = `${payload.year}${payload.code}${incrementId}`;
    return incrementId;
};
