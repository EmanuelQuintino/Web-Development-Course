import { Request, Response, NextFunction } from "express";

type Roles = "admin" | "default";

export function roleAuthorization(roleToVerify: Roles[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.userData;

    if (!roleToVerify.includes(role)) {
      throw res.status(401).json({ message: "user not authorized!" });
    }
    return next();
  };
}
