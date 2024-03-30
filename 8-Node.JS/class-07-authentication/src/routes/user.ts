import { Router } from "express";
import { userControllers } from "../controllers/user";
import { authMiddleware } from "../middlewares/auth";

export const userRoutes = Router();

userRoutes.post("/user", userControllers.create);
userRoutes.get("/user", authMiddleware, userControllers.read);
