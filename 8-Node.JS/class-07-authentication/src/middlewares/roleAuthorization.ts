import { Request, Response, NextFunction } from "express";
import { getUserByID } from "../databases/sqlite3/services/user/getUserByID";

type Roles = "admin" | "default";

export function roleAuthorization(roleToVerify: Roles[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await getUserByID(req.userID);

      if (!roleToVerify.includes(user.role)) {
        throw res.status(401).json({ message: "user not authorized!" });
      }

      return next();
    } catch (error) {
      return next(error);
    }
  };
}
