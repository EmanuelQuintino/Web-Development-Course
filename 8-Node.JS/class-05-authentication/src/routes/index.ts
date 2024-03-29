import { Router } from "express";
import { authRoutes } from "./auth";
import { userRoutes } from "./user";
import { salesRoutes } from "./sales";

export const routes = Router();

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(salesRoutes);
