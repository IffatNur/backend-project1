import { Model, Types } from 'mongoose';

export type TGuardian = {
  fatherName: string;
  fatherContact: number;
  fatherOccupation: string;
  motherName: string;
  motherContact: number;
  motherOccupation: string;
};
export type TStudentName = {
  firstname: string;
  middlename?: string;
  lastname: string;
};

export type TLocalGuardian = {
  name: string;
  contact: number;
  address: string;
};

export type TStudent = {
  id: number;
  password: string;
  user: Types.ObjectId;
  name: TStudentName;
  gender: 'Female' | 'Male' | 'Others';
  email: string;
  contact: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'B+' | 'O+' | 'AB+' | 'A-' | 'B-' | 'O+' | 'AB-';
  presentAddress: string | undefined;
  parmanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileIMG?: string | undefined;
  isActive: 'true' | 'false';
  admissionSemester: Types.ObjectId; //to take ref from other table
  isDeleted?: true | false;
};

// creating static 
export interface StudentModel extends Model<TStudent>{
  isUserExists(id: number) : Promise<TStudent | null>
}



// for creating instance 
// export type StudentMethods = {
//   isUserExists(id: number): Promise<TStudent | null>;
// };

// TStudent is type
// export type StudentModel = Model<
//   TStudent,
//   Record<string, never>,
//   StudentMethods
// >;
