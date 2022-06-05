import * as mongoose from 'mongoose';

export class User {
  constructor(public idNumber: number) {}
}

// export const UserSchema = new mongoose.Schema({
//   idNumber: { type: Number, required: false },
// });

// //use mongodb atlas to store
// export interface User extends mongoose.Document {
//   idNumber: Number;
// }
