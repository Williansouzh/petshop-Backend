import { TutorController } from "@src/controllers/tutor";
import { Tutor } from "@src/database/models/tutor";
import { TutorRepository } from "@src/repositories/TutorRepository";
import { TutorService } from "@src/services/tutor";
import { Router } from "express";

const route = Router();

const tutorRepository = new TutorRepository(Tutor);
const tutorService = new TutorService(tutorRepository);
const tutorController = new TutorController(tutorService);

/**
 * @swagger
 * tags:
 *   name: Tutors
 *   description: API endpoints for managing tutors
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Tutor:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the tutor
 *         name:
 *           type: string
 *           description: The name of the tutor
 *         email:
 *           type: string
 *           description: The email address of the tutor
 *         password:
 *           type: string
 *           format: password
 *           description: The password of the tutor
 *         subjects:
 *           type: array
 *           items:
 *             type: string
 *           description: List of subjects the tutor can teach
 *       example:
 *         name: Johasdqasdfasasd asdasd
 *         email: qwd@mail.com
 *         password: "12345678"
 */

/**
 * @swagger
 * /tutors:
 *   get:
 *     summary: Retrieve all tutors
 *     tags: [Tutors]
 *     responses:
 *       200:
 *         description: A list of tutors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tutor'
 *   post:
 *     summary: Create a new tutor
 *     tags: [Tutors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       200:
 *         description: Successfully created a new tutor
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /tutors/{id}:
 *   patch:
 *     summary: Update an existing tutor by ID
 *     tags: [Tutors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tutor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       200:
 *         description: Successfully updated the tutor
 *       400:
 *         description: Bad request
 *       404:
 *         description: Tutor not found
 *   delete:
 *     summary: Delete a tutor by ID
 *     tags: [Tutors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tutor
 *     responses:
 *       204:
 *         description: Successfully deleted the tutor
 *       404:
 *         description: Tutor not found
 */

// Bind routes to controller methods
route.get("/tutors", tutorController.getAll.bind(tutorController));
route.post("/tutors", tutorController.create.bind(tutorController));
route.patch("/tutors/:id", tutorController.update.bind(tutorController));
route.delete("/tutors/:id", tutorController.delete.bind(tutorController));

export default route;
