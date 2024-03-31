import { Router } from "express";
import { userControllers } from "../controllers/userControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

export const userRoutes = Router();

userRoutes.post("/user", userControllers.create);
userRoutes.get("/user", authMiddleware, userControllers.read);
