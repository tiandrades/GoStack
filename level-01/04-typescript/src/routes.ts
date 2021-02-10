import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "@gmail.com",
    password: "535353",
    techs: [
      "Node.js",
      "ReactJS",
      "React Native",
    ],
  });
  return response.json({ message: "Hello World" });
}
