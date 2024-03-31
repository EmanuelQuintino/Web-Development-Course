import { Request, Response, NextFunction } from "express";
import multer from "multer";

export function appErrors(
  error: Error & { status: number },
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware Error - ", error);

  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ message: "Max size is 2MB!" });
    }
  }

  return res
    .status(error.status || 500)
    .json({ message: error.message || "Server Error!" });
}
