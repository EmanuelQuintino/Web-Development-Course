import { Router } from "express";
import { userController } from "../controllers";

export const router = Router();

router.post("/user", userController.create);
router.get("/user/:id", userController.read);
router.get("/user", userController.read);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);
