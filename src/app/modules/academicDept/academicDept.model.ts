import { Schema, model } from "mongoose";
import { TAcademicDepartment } from "./academicDept.interface";

const academicDeptSchema = new Schema<TAcademicDepartment>({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'AcademicFaculty',
  },
});


academicDeptSchema.pre('save', async function (next){
  const deptExists = await academicDeptModel.findOne({name: this.name});
  if(deptExists){
    throw new Error('This dept already exists')
  }
  next()
})

academicDeptSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const deptExists = await academicDeptModel.findOne(query);
  if(!deptExists){
    throw new Error('Department does not exist')
  }
  next()
});

export const academicDeptModel = model<TAcademicDepartment>('AcademicDepartment', academicDeptSchema)