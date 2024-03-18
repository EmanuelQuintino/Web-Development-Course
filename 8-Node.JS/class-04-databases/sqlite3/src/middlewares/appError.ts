import { Request, Response, NextFunction } from "express";

type AppError = {
  status: number;
  message: string;
};

export function appError(
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Error middleware:", error);
  return res.status(error.status || 500).json({ error: error.message });
}
