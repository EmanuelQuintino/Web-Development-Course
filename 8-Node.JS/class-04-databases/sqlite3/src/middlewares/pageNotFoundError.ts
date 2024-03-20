import { Request, Response, NextFunction } from "express";

type CustomError = {
  message: string;
  status?: number;
};

export function pageNotFoundError(req: Request, res: Response, next: NextFunction) {
  const error: CustomError = new Error("page not found!");
  error.status = 404;
  next(error);
}
