import { TAcademicFaculty } from "./academicFaculty.interface";
import { academicFacultyModel } from "./academicFaculty.model"

const createAcademicFacultyIntoDB = async(payload: TAcademicFaculty) =>{
    const result = await academicFacultyModel.create(payload);
    return result;
}

const getAllAcademicFacultyFromDB = async() =>{
    const result = await academicFacultyModel.find();
    return result;
}

const getOneAcademicFacultyFromDB = async(id: string) =>{
    const result = await academicFacultyModel.findById({_id: id});
    return result;
}

const updateAcademicFacultyOfDB = async(id:string, payload: Partial<TAcademicFaculty>) =>{
    const result = await academicFacultyModel.findByIdAndUpdate({_id:id}, payload, {new:true});
    return result;
}

export const academicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultyFromDB,
    getOneAcademicFacultyFromDB,
    updateAcademicFacultyOfDB
}