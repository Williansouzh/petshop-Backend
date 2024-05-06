import { Tutor } from "@src/database/models/tutor";

describe("Users functional tests", () => {
  beforeEach(async () => {
    await Tutor.deleteMany({});
  });
  describe("When creating a new tutor", () => {
    it("should return 200", async () => {
      const response = await global.testRequest.get("/tutors");
      expect(response.status).toBe(200);
    });
    it("should successfully create a new tutor", async () => {
      const newUser = {
        name: "John Doe",
        email: "john@mail.com",
        password: "12345678",
      };
      const response = await global.testRequest.post("/tutors").send(newUser);
      expect(response.status).toBe(201);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...expectedUser } = response.body;
      expect(response.body).toEqual(expect.objectContaining(expectedUser));
    });
  });
  describe("When edit a tutor", () => {
    let tutorId: string;

    beforeEach(async () => {
      const newUser = {
        name: "John Doe",
        email: "john@mail.com",
        password: "12345678",
      };
      const creationResponse = await global.testRequest
        .post("/tutors")
        .send(newUser);
      expect(creationResponse.status).toBe(201);
      tutorId = creationResponse.body.id;
    });

    it("should successfully edit a tutor", async () => {
      const deletionResponse = await global.testRequest.patch(
        `/tutors/${tutorId}`
      );
      expect(deletionResponse.status).toBe(204);

      const retrievalResponse = await global.testRequest.get(
        `/tutors/${tutorId}`
      );
      expect(retrievalResponse.status).toBe(404);
    });
  });
  describe("When delete a tutor", () => {
    let tutorId: string;

    beforeEach(async () => {
      const newUser = {
        name: "John Doe",
        email: "john@mail.com",
        password: "12345678",
      };
      const creationResponse = await global.testRequest
        .post("/tutors")
        .send(newUser);
      expect(creationResponse.status).toBe(201);
      tutorId = creationResponse.body.id;
    });

    it("should successfully delete a tutor", async () => {
      const deletionResponse = await global.testRequest.delete(
        `/tutors/${tutorId}`
      );
      expect(deletionResponse.status).toBe(204);

      const retrievalResponse = await global.testRequest.get(
        `/tutors/${tutorId}`
      );
      expect(retrievalResponse.status).toBe(404);
    });
  });
});
