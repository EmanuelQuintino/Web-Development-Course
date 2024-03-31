import { Router } from "express";
import { salesControllers } from "../controllers/salesControllers";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleAuthorization } from "../middlewares/roleAuthorization";

export const salesRoutes = Router();

salesRoutes.use(authMiddleware, roleAuthorization(["admin"]));
salesRoutes.get("/sales", salesControllers.read);
