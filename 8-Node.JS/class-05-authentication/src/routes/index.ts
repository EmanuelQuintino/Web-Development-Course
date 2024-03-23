import { Router } from "express";
import { authRoutes } from "./authRoutes";
import { userRoutes } from "./userRoutes";

export const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
