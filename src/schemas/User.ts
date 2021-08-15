import { Document, Schema, Model, model } from 'mongoose'

export interface UserModel extends Document {
  email?: String,
  firstName?: String,
  lastName?: String
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})


export const User: Model<UserModel> = model<UserModel>('User', UserSchema)