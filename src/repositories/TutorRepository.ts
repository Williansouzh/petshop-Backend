// repositories/UserRepository.ts
import { Model } from "mongoose";
import { Tutor, TutorModel } from "@src/database/models/tutor";

export class TutorRepository {
  private tutorModel: Model<TutorModel>;

  constructor(tutorModel: Model<TutorModel>) {
    this.tutorModel = tutorModel;
  }

  async getById(id: string): Promise<TutorModel | null> {
    return this.tutorModel.findById(id).exec();
  }
  async getByEmail(email: string): Promise<boolean> {
    const user = await this.tutorModel.findOne({ email }).exec();
    return user ? true : false;
  }

  async getAll(): Promise<TutorModel[]> {
    return this.tutorModel.find().exec();
  }

  async create(tutor: Tutor): Promise<TutorModel> {
    return this.tutorModel.create(tutor);
  }

  async update(id: string, tutor: Tutor): Promise<TutorModel | null> {
    return this.tutorModel.findByIdAndUpdate(id, tutor, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.tutorModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
