import * as mongoose from 'mongoose';

export class LocalUser {
  constructor(public idNumber: number) {}
}

export const UserSchema = new mongoose.Schema({
  email: { type: String, required: false },
  password: { type: String, required: false },
});

//use mongodb atlas to store
export interface User extends mongoose.Document {
  email: Number;
  password: String;
}
