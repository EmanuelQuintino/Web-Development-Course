import { Router } from "express";
import { reportControllers } from "../controllers/reportControllers";

export const router = Router();

router.get("/reports/users", reportControllers.reportUsers);
