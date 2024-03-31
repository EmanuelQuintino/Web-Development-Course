import { Request, Response, NextFunction } from "express";

export function appErrors(
  error: Error & { status: number },
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware Error - ", error);
  res.status(error.status || 500);
  res.json({ message: error.message || "Server Error!" });
}
