import { Request, Response, NextFunction } from "express";

export function pageNotFound(_req: Request, _res: Response, next: NextFunction) {
  const error = {
    message: "Page not found",
    status: 404,
  };
  next(error);
}
