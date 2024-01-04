import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  TStudentName,
} from './student.interface';

// SCHEMA
const userNameSchema = new Schema<TStudentName>({
  firstname: {
    type: String,
    trim: true,
    required: [true, 'First name required'],
    maxlength: [20, 'Has exceed maximum length'],
    validate: {
      validator: function (value: string) {
        const firstnameStr = value.charAt(0).toUpperCase() + value.slice(1); //Iffat
        return firstnameStr === value;
      },
      message: '{VALUE} is incorrect',
    },
  },
  middlename: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, 'Last name required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid name',
    },
  },
});

const guardianDetails = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherContact: { type: Number, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherContact: { type: Number, required: true },
  motherOccupation: { type: String, required: true },
});

const localGuardianDetails = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: Number, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User Id required'],
    unique: true,
    ref: 'User'
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ['Female', 'Male', 'Others'],
      message: 'The value {VALUE} is not correct',
    },
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid email',
    },
  },
  contact: { type: String, required: true, trim: true },
  emergencyContact: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'B+', 'O+', 'AB+', 'A-', 'B-', 'O+', 'AB-'],
  },
  presentAddress: { type: String, trim: true, required: true },
  parmanentAddress: { type: String, trim: true, required: true },
  guardian: {
    type: guardianDetails,
    required: true,
  },
  localGuardian: {
    type: localGuardianDetails,
    required: true,
  },
  profileIMG: { type: String },
  isActive: {
    type: String,
    enum: ['true', 'false'],
    default: 'true',
  },
  admissionSemester:{
    type: Schema.Types.ObjectId, //to take ref from other table
    ref: 'Semester'
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
},{
  toJSON: {virtuals: true}
});

// virtual
studentSchema.virtual('fullname').get(function(){
  return this.name.firstname + this.name.middlename + this.name.lastname;
})


// creating instance 
// studentSchema.methods.isUserExists = async function(id: number) {
//   const existingUser = await Student.findOne({id}) ;
//   return existingUser;
// }

// Query middleware

studentSchema.pre('find', function(next){
  this.find({isDeleted : {$ne: true}})
  next()
})

studentSchema.pre('findOne', function(next){
  this.find({isDeleted : {$ne: true}})
  next()
})

// studentSchema.pre('aggregate',function (next){
//   this.pipeline().unshift({$match: {isDeleted: {$ne: false}}})
//   next()
// })

// creating custom statics method
studentSchema.statics.isUserExists = async function (id: number) {
  const userExist = await Student.findOne({ id });
  return userExist;
};

// MODEL
export const Student = model<TStudent, StudentModel>('Student', studentSchema);




