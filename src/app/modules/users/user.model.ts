import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";
import bcrypt from 'bcrypt';


const userSchema = new Schema<TUser>({
  id: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  needsPasswordChange: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ['admin', 'student', 'faculty'],
  },
  status: {
    type: String,
    enum: ['in-progress' , 'blocked'],
    default: 'in-progress'
  },
  isDeleted: {
    type: Boolean,
    required: false,
  },
},
// to keep created-at & update-at time 
{
    timestamps: true
});

// Document middleware 
// pre middleware function : data will be saved
userSchema.pre('save', async function(next){
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  // hashing password to store in DB 
  user.password = await bcrypt.hash(
    user.password, 
    Number(config.bcrypt_salt_rounds)
    );
  next();
})
// post middleware function 
userSchema.post('save', function(doc, next){
  doc.password = '';
  next()
})

export const User = model<TUser>('User', userSchema)