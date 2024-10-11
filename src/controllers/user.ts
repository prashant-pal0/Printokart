import { Request, Response } from "express";
import { userService } from "../services/userService";

export const userController = {
  register: async (req: Request, res: Response) => {
    console.log('hello')
    const { email, password, fullName } = req.body;
    console.log(email, password, fullName)
    try {
      const newUser = await userService.register(email, password, fullName);
      res.status(201).json({ user: newUser });
    } catch (error) {
      res.status(400).json({ message: "Error" });
    }
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
      const token = await userService.login(email, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: "error.message" });
    }
  },
};
