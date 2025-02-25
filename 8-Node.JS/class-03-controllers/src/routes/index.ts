import { Router } from "express";
import { userControllers } from "../controllers/userControllers";

export const router = Router();

router.post("/user", userControllers.create);
router.get("/user/:id", userControllers.read);
router.put("/user/:id", userControllers.update);
router.delete("/user/:id", userControllers.delete);
