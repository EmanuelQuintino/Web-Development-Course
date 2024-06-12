import { Request, Response, NextFunction } from "express";

export function appErrors(
  error: Error & { status: number },
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware appErrors >>>> ", error);
  return res
    .status(error.status || 500)
    .json({ message: error.message || "Server Error!" });
}
