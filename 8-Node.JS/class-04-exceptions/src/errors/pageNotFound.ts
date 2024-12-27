import { Request, Response, NextFunction } from "express";
import { AppError } from "./appError";

export function pageNotFound(_req: Request, _res: Response, next: NextFunction) {
  const error = new AppError("Page not found!", 404);
  next(error);
}
