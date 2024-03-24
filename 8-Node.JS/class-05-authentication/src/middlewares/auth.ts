import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const beareToken = req.headers.authorization;

  if (!beareToken) return res.status(401).json({ message: "no token provided!" });

  const splitBeareToken = beareToken.split(" ");

  if (splitBeareToken.length != 2) {
    return res.status(401).json({ message: "badly formatted token!" });
  }

  const [schema, token] = splitBeareToken;

  if (!/^Bearer$/i.test(schema)) {
    return res.status(401).json({ message: "badly formatted token!" });
  }

  verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error) throw res.status(401).json({ message: "invalid token!" });
    req.userID = (decoded as JwtPayload).id;
    return next();
  });
}
