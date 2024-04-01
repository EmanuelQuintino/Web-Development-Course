import { Request, Response, NextFunction } from "express";
import multer from "multer";

export function appErrors(
  error: Error & { status: number; code: string },
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware Error - ", error);

  if (error instanceof multer.MulterError) {
    console.log("_____________MulterError_____________");

    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "Max size is 2MB!" });
    }
  }

  if (error.code == "ENOENT") {
    return res.status(404).json({ message: "File not found!" });
  }

  return res
    .status(error.status || 500)
    .json({ message: error.message || "Server Error!" });
}
