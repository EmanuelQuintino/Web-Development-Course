import { Router } from "express";
import { authControllers } from "../controllers/auth";

export const authRoutes = Router();

authRoutes.post("/login", authControllers.login);
