import { TAcademicDepartment } from "./academicDept.interface";
import { academicDeptModel } from "./academicDept.model";

const createAcademicDept = async(payload: TAcademicDepartment) =>{
    const result = await academicDeptModel.create(payload);
    return result
}

const getAllAcademicDeptFromDB = async() =>{
    const result = await academicDeptModel.find().populate('academicFaculty');
    return result;
}

const getOneAcademicDeptFromDB = async(id: string) =>{
    const result = await academicDeptModel.findById({_id: id});
    return result;
}

const updateAcademicDeptOfDB = async(id: string, payload: Partial<TAcademicDepartment>) =>{
    const result = await academicDeptModel.findOneAndUpdate({_id:id}, payload, {new:true})
    return result;
}

export const academiDeptServices = {
    createAcademicDept,
    getAllAcademicDeptFromDB,
    getOneAcademicDeptFromDB,
    updateAcademicDeptOfDB
}