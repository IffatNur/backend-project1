import { TStudent } from './student.interface';
import { Student } from './student.model';

// const createStudentIntoDb = async (studentData: TStudent) => {
//   // data existance is checked by calling model in static method case 
//   if(await Student.isUserExists(studentData.id)){
//     throw new Error('Student exists');
//   }
//   const result = await Student.create(studentData); //built in static method

//   // instance method
// //   const student = new Student(studentData); //create an instance
// //   data is called on instance in this case 
// //   if (await student.isUserExists(studentData.id)) { //custom instance
// //     throw new Error('Student exists');
// //   }
// //   const result = await student.save(); //built in instance method
//   return result;
// // };
// }
const findAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const findOneStudent = async (id: string) => {
  const result = await Student.findOne({ id });

  // with aggregate 
  // const result = await Student.aggregate([{$match: { id: id}}])
  return result;
};

const deleteOneStudent = async (id: string) => {
  const result = await Student.updateOne({ id }, {isDeleted: true});
  return result;
};

export const StudentServices = {
  findAllStudentsFromDB,
  findOneStudent,
  deleteOneStudent,
};
