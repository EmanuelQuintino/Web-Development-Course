import { Router } from "express";
import { authControllers } from "../controllers/authControllers";

export const authRoutes = Router();

authRoutes.post("/login", authControllers.login);
