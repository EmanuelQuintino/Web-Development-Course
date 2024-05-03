import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/userRepository";

type Roles = "admin" | "default";

export function roleAuthorizationMiddleware(roleToVerify: Roles[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await userRepository.getByID(req.userID);

      if (!roleToVerify.includes(user.role)) {
        throw res.status(401).json({ message: "user not authorized!" });
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
}
