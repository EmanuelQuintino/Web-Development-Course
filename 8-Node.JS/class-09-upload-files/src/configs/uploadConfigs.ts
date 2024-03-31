import path from "path";
import multer from "multer";
import crypto from "node:crypto";
import { Request } from "express";

interface MulterFile extends Express.Multer.File {}

export const UPLOADS_FOLDER = path.resolve(__dirname, "..", "uploads");

export const MULTER = {
  storage: multer.diskStorage({
    destination: UPLOADS_FOLDER,
    filename(_req, file, callback) {
      const hash = crypto.randomBytes(10).toString("hex");
      const fileName = `${hash}_${file.originalname}`;
      return callback(null, fileName);
    },
  }),

  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (
    _req: Request,
    file: MulterFile,
    callback: (error: Error | null, acceptFile: boolean) => void
  ) => {
    const formatFiles = ["image/jpeg", "image/pjpeg", "image/png", "image/gif"];

    if (formatFiles.includes(file.mimetype)) return callback(null, true);

    const error = new Error("Invalid image type!") as Error & { status: number };
    error.status = 400;

    callback(error, false);
  },
};
