export type TMonths = 
    "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
export type TSemesterName = 
    'Summar' | 'Autumn' | 'Fall';
export type TSemesterCode = 
    '01' | '02' | '03';


export type TAcedemicSemester = {
    name: TSemesterName,
    code: TSemesterCode,
    year: string,
    startMonth: TMonths,
    endMonth: TMonths
}

// check if the semester name & code matches 
export type TSemesterNameCodeMapper = {
        [key:string] : string
    }