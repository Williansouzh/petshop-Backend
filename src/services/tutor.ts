// services/UserService.ts
import { TutorModel } from "@src/database/models/tutor";
import { TutorRepository } from "../repositories/TutorRepository";

export class TutorService {
  private tutorRepository: TutorRepository;

  constructor(userRepository: TutorRepository) {
    this.tutorRepository = userRepository;
  }

  async createUser(userData: TutorModel): Promise<TutorModel> {
    return this.tutorRepository.create(userData);
  }

  async getUserById(userId: string): Promise<TutorModel | null> {
    return this.tutorRepository.getById(userId);
  }

  async getAllUsers(): Promise<TutorModel[]> {
    return this.tutorRepository.getAll();
  }

  async updateUser(
    userId: string,
    userData: TutorModel
  ): Promise<TutorModel | null> {
    return this.tutorRepository.update(userId, userData);
  }

  async deleteUser(userId: string): Promise<boolean> {
    return this.tutorRepository.delete(userId);
  }
}
