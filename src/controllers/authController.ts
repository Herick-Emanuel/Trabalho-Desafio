import { Request, Response } from "express";
import { User } from "../models/userModel";
import { registerUser, loginUser } from "../services/authService";

export function registerUserController(req: Request, res: Response): void {
  const userData: User = req.body as User;
  const newUser = registerUser(userData);
  res.status(201).json(newUser);
}

export function loginUserController(req: Request, res: Response): void {
  const credentials = req.body as { username: string; password: string };
  const loggedInUser = loginUser(credentials);
  if (loggedInUser) {
    res.json(loggedInUser);
  } else {
    res.status(401).json({ message: "Usuário não autorizado" });
  }
}
export { registerUser, loginUser };
