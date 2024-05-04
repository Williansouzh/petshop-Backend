import "./util/module-alias";
import "express-async-errors";
import dotenv from "dotenv";
import express, { Application } from "express";
import bodyParser from "body-parser";
import route from "./routes/tutor";
import * as database from "./database/connection";
dotenv.config();
export class App {
  readonly app: Application;
  readonly port: string | number;
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3333;
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  public getApp(): Application {
    return this.app;
  }
  public async init(): Promise<void> {
    this.setupExpress();
    await this.databaseSetup();
  }
  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(express.json());
    this.setupRoutes();
  }
  public start(): void {
    this.app.listen(this.port, () => {
      console.info("Server listening on port: " + this.port);
    });
  }
  setupRoutes() {
    this.app.use(route);
  }
  private async databaseSetup(): Promise<void> {
    await database.connect();
  }
  public async close(): Promise<void> {
    await database.close();
  }
}
