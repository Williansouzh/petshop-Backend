import { Request, Response } from "express";
import { TutorService } from "@src/services/tutor";

export class TutorController {
  private tutorService: TutorService;

  constructor(tutorService: TutorService) {
    this.tutorService = tutorService;
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const tutors = await this.tutorService.getAllUsers();
      res.json(tutors);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    // Implemente a lógica para criar um tutor aqui
  }

  public async modify(req: Request, res: Response): Promise<void> {
    // Implemente a lógica para modificar um tutor aqui
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // Implemente a lógica para deletar um tutor aqui
  }
}
