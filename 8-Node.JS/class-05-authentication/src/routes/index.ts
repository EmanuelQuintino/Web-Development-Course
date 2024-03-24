import { Router } from "express";
import { authRoutes } from "./auth";
import { userRoutes } from "./user";

export const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
