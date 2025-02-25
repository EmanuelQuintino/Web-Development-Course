import { Request, Response, NextFunction } from "express";
import { AppError } from "./appError";

export function appErrors(
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware appErrors >>> ", error);

  return res
    .status(error.status || 400)
    .json({ message: error.message || "Something is wrong!" });
}
