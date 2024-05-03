import { Router } from "express";
import { fileControllers } from "../controllers/fileControllers";
import multer from "multer";
import { MULTER } from "../configs/uploadConfigs";

export const router = Router();
const upload = multer(MULTER);

router.post("/file", upload.single("file"), fileControllers.upload);
router.delete("/file/:name", upload.single("file"), fileControllers.dalete);
