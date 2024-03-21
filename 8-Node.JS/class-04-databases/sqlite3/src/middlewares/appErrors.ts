import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

type AppErrors = {
  message: string;
  status: number;
};

export function appErrors(
  error: AppErrors,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("Middleware Error - ", error);

  if (error instanceof ZodError) {
    return res
      .status(error.status || 500)
      .json({ message: JSON.parse(error.message)[0].message });
  }

  res.status(error.status || 500).json({ message: error.message || "Server error!" });
}
