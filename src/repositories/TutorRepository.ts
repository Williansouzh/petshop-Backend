// repositories/UserRepository.ts
import { Model } from "mongoose";
import { TutorModel } from "@src/database/models/tutor";

export class TutorRepository {
  private userModel: Model<TutorModel>;

  constructor(userModel: Model<TutorModel>) {
    this.userModel = userModel;
  }

  async getById(id: string): Promise<TutorModel | null> {
    return this.userModel.findById(id).exec();
  }

  async getAll(): Promise<TutorModel[]> {
    return this.userModel.find().exec();
  }

  async create(user: TutorModel): Promise<TutorModel> {
    return this.userModel.create(user);
  }

  async update(id: string, user: TutorModel): Promise<TutorModel | null> {
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}
