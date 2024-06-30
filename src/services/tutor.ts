// services/UserService.ts
import { Tutor, TutorModel } from "@src/database/models/tutor";
import { TutorRepository } from "../repositories/TutorRepository";
import { DuplicateEmailError } from "@src/helpers/api-errors";

export class TutorService {
  private tutorRepository: TutorRepository;

  constructor(tutorRepository: TutorRepository) {
    this.tutorRepository = tutorRepository;
  }

  async duplicatedEmail(email: string): Promise<boolean> {
    const existingEmail = await this.tutorRepository.getByEmail(email);
    return !!existingEmail;
  }

  async createUser(tutorData: Tutor): Promise<TutorModel> {
    if (await this.duplicatedEmail(tutorData.email)) {
      throw new DuplicateEmailError(tutorData.email);
    }
    return this.tutorRepository.create(tutorData);
  }

  async getUserById(tutorId: string): Promise<TutorModel | null> {
    return this.tutorRepository.getById(tutorId);
  }

  async getAllUsers(): Promise<TutorModel[]> {
    return this.tutorRepository.getAll();
  }

  async updateUser(
    tutorId: string,
    tutorData: Tutor
  ): Promise<TutorModel | null> {
    return this.tutorRepository.update(tutorId, tutorData);
  }

  async deleteUser(tutorId: string): Promise<boolean> {
    return this.tutorRepository.delete(tutorId);
  }
}
