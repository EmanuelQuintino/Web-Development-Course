import { Router } from "express";
import { salesControllers } from "../controllers/sales";
import { authMiddleware } from "../middlewares/auth";
import { roleAuthorization } from "../middlewares/roleAuthorization";

export const salesRoutes = Router();

salesRoutes.use(authMiddleware, roleAuthorization(["admin"]));
salesRoutes.get("/sales", salesControllers.read);
