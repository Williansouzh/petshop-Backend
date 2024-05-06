import { TutorController } from "@src/controllers/tutor";
import { Tutor } from "@src/database/models/tutor";
import { TutorRepository } from "@src/repositories/TutorRepository";
import { TutorService } from "@src/services/tutor";
import { Router } from "express";

const route = Router();

const tutorRepository = new TutorRepository(Tutor);
const userService = new TutorService(tutorRepository);
const userController = new TutorController(userService);

route.get("/tutors", userController.getAll.bind(userController));
route.post("/tutors", userController.create.bind(userController));
route.patch("/tutors/:id", userController.update.bind(userController));
route.delete("/tutors/:id", userController.delete.bind(userController));
export default route;
