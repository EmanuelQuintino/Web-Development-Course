import { Router } from "express";
import { uploadControllers } from "../controllers/file";
import multer from "multer";
import { MULTER } from "../configs/uploadConfigs";

export const router = Router();

router.post("/file", multer(MULTER).single("file"), uploadControllers.upload);
