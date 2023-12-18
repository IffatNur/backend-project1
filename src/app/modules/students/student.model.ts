import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  StudentName,
} from './student.interface';

// SCHEMA
const userNameSchema = new Schema<StudentName>({
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
});

const guardianDetails = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherContact: { type: Number, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContact: { type: Number, required: true },
  motherOccupation: { type: String, required: true },
});

const localGuardianDetails = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: Number },
  name: userNameSchema,
  gender: ['Female', 'Male'],
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  emergencyContact: { type: Number, required: true },
  bloodGroup: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O+', 'AB-'],
  presentAddress: { type: String },
  parmanentAddress: { type: String },
  guardian: guardianDetails,
  localGuardian: localGuardianDetails,
  profileIMG: { type: Number },
  isActive: ['true', 'false'],
});

// MODEL
export const StudentModel = model<Student>('Student', studentSchema);
