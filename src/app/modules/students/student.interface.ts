export type Guardian = {
  fatherName: string;
  fatherContact: number;
  fatherOccupation: string;
  motherName: string;
  motherContact: number;
  motherOccupation: string;
};
export type StudentName = {
  firstname: string;
  middlename: string;
  lastname: string;
};

export type LocalGuardian = {
  name: string;
  contact: number;
  address: string;
};

export type Student = {
  id: number;
  name: StudentName;
  gender: 'Female' | 'Male';
  email: string;
  contact: number;
  emergencyContact: number;
  bloodGroup?: 'A+' | 'B+' | 'O+' | 'AB+' | 'A-' | 'B-' | 'O+' | 'AB-';
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileIMG?: string;
  isActive: 'true' | 'false';
};
