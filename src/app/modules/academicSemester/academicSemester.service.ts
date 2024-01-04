import { TAcedemicSemester, TSemesterNameCodeMapper } from "./academicSemester.interface";
import { academicSemesterModel } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async(payload : TAcedemicSemester) =>{
    // check if the semester name & code matches 
    const semesterNameCodeMapper: TSemesterNameCodeMapper = {
        Autumn: '01',
        Summar: '02',
        Fall: '03',
    } 
    if(semesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invalid semester code')
    }
    const result = await academicSemesterModel.create(payload);
    return result;
}

const findOneSemesterFromDB = async(id: string) =>{
    const result = await academicSemesterModel.findOne({_id: id});
    return result;
}

const findAllSemesterFromDB = async() =>{
    const result = await academicSemesterModel.find();
    return result;
}


const updateSemesterFromDB = async(id: string, payload:  Partial<TAcedemicSemester> ) =>{
    // check if the semester name & code matches 
    const semesterNameCodeMapper: TSemesterNameCodeMapper = {
        Autumn: '01',
        Summar: '02',
        Fall: '03',
    }
    if(payload.name && payload.code && semesterNameCodeMapper[payload.name] !== payload.code){
        throw new Error('Invalid semester code')
    }
    const result = await academicSemesterModel.findByIdAndUpdate(
      { _id: id },
      payload,
      { new: true }, //{new: true}- provides updated object as response
    );
    return result;
}



export const AcademicSemesterservices = {
  createAcademicSemesterIntoDB,
  findOneSemesterFromDB,
  findAllSemesterFromDB,
  updateSemesterFromDB,
};