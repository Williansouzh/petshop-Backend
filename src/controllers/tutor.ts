import { NextFunction, Request, Response } from "express";
import { TutorService } from "@src/services/tutor";
import { Tutor } from "@src/database/models/tutor";

export class TutorController {
  private tutorService: TutorService;

  constructor(tutorService: TutorService) {
    this.tutorService = tutorService;
  }

  public getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const tutors = await this.tutorService.getAllUsers();
      res.json(tutors);
    } catch (error) {
      next(error);
    }
  };

  public create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { name, email, password } = req.body;
      const newTutor: Tutor = {
        name,
        email,
        password,
      };
      const createdTutor = await this.tutorService.createUser(newTutor);
      res.status(201).json(createdTutor);
    } catch (error) {
      next(error);
    }
  };

  public update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { name, email, password } = req.body;
      const id = req.params.id;
      const updatedTutorData: Tutor = {
        name,
        email,
        password,
      };
      const updatedTutor = await this.tutorService.updateUser(
        id,
        updatedTutorData
      );
      res.json(updatedTutor);
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

  public delete = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { id } = req.body;
      await this.tutorService.deleteUser(id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}
