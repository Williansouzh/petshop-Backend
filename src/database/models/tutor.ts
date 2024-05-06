import mongoose, { Document, Model } from "mongoose";

export interface Tutor {
  _id?: string;
  name: string;
  email: string;
  password: string;
}

export interface TutorModel extends Omit<Tutor, "_id">, Document {}

const schema = new mongoose.Schema<TutorModel>(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: String, required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Tutor: Model<TutorModel> = mongoose.model("Tutor", schema); // Changed "User" to "Tutor"
