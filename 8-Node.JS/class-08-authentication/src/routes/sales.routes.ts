import { Router } from "express";
import { salesControllers } from "../controllers/salesControllers";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleAuthorizationMiddleware } from "../middlewares/roleAuthorizationMiddleware";

export const salesRoutes = Router();

salesRoutes.use(authMiddleware, roleAuthorizationMiddleware(["admin"]));
salesRoutes.get("/sales", salesControllers.read);
