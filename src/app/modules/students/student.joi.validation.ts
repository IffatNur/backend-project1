import Joi from "joi";

// joi schema
const userNameValidationSchema = Joi.object({
  firstname: Joi.string()
    .trim()
    .required()
    .max(20)
    .regex(/^[A-Za-z]+$/)
    .message('First name must be alphabetic and less than 20 characters'),
  middlename: Joi.string().trim(),
  lastname: Joi.string()
    .trim()
    .required()
    .regex(/^[A-Za-z]+$/)
    .message('Last name must be alphabetic'),
});

const guardianDetailsValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherContact: Joi.number().required(),
  fatherOccupation: Joi.string().required(),
  motherName: Joi.string().required(),
  motherContact: Joi.number().required(),
  motherOccupation: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  contact: Joi.number().required(),
  address: Joi.string().required(),
});

const studentValidationSchemaJoi = Joi.object({
  id: Joi.number().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('Female', 'Male', 'Others').required(),
  email: Joi.string().email().required(),
  contact: Joi.string().required(),
  emergencyContact: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'B+',
    'O+',
    'AB+',
    'A-',
    'B-',
    'O-',
    'AB-',
  ),
  presentAddress: Joi.string().trim(),
  parmanentAddress: Joi.string().trim(),
  guardian: guardianDetailsValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileIMG: Joi.string(),
  isActive: Joi.string().valid('true', 'false').default('true'),
});

export default studentValidationSchemaJoi;
