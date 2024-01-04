import { Router } from "express";
import { StudentRoute } from "../modules/students/student.routes";
import { UserRoute } from "../modules/users/user.route";
import { AcademicSemesterRoute} from "../modules/academicSemester/academicSemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDeptRoutes } from "../modules/academicDept/academicDept.route";

const router = Router();

router.use('/students', StudentRoute);

router.use('/users', UserRoute);

router.use('/academic-semesters', AcademicSemesterRoute);

router.use('/academic-faculty', AcademicFacultyRoutes);

router.use('/academic-dept', AcademicDeptRoutes)

export default router;