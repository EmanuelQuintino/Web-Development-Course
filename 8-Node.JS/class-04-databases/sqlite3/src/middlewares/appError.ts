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
  console.error("Middleware error: ", error);
  res.status(error.status || 500);
  res.send({ error: error.message });
}
