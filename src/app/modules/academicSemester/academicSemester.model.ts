import { Schema, model } from "mongoose";
import { TAcedemicSemester, TMonths, TSemesterCode, TSemesterName } from "./academicSemester.interface";

const monthSchema: TMonths[] = [
  'January' ,
    'February' ,
    'March' ,
    'April' ,
    'May' ,
    'June' ,
    'July' ,
    'August' ,
    'September' ,
    'October' ,
    'November' ,
    'December'
];
const semesterNameSchema: TSemesterName[] = ['Summar', 'Autumn', 'Fall']
const semesterCodeSchema: TSemesterCode[] = ['01', '02', '03']

export const academicSchema = new Schema<TAcedemicSemester>({
  name: { type: String, required: true, enum:  semesterNameSchema},
  code: { type: String, required: true, enum:  semesterCodeSchema},
  year: { type: String, required: true },
  startMonth: { type: String, required: true, enum: monthSchema },
  endMonth: { type: String, required: true, enum: monthSchema },
},{
    timestamps: true
});

academicSchema.pre('save',async function(next){
    const semesterExists = await academicSemesterModel.findOne({
        name:this.name,
        year: this.year
    })
    if(semesterExists){
        throw new Error('Semester already exists')
    }
    next()
})

export const academicSemesterModel = model<TAcedemicSemester>('Semester',academicSchema)