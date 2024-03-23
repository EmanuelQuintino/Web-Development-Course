import { Request, Response, NextFunction } from "express";

type CustomError = {
  message: string;
  status?: number;
};

export function pageNotFound(_req: Request, _res: Response, next: NextFunction) {
  const error = new Error("Page not found!") as CustomError;
  error.status = 404;
  next(error);
}
