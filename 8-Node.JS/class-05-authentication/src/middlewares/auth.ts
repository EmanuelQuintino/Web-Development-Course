import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { cookie } = req.headers;

  if (!cookie) return res.status(401).json({ message: "token is required!" });

  const splitCookieToken = cookie.split("=");

  if (splitCookieToken.length != 2) {
    return res.status(401).json({ message: "badly formatted token!" });
  }

  const [key, token] = splitCookieToken;

  if (key != process.env.KEY_TOKEN) {
    return res.status(401).json({ message: "badly key token!" });
  }

  verify(token, process.env.SECRET_TOKEN, (error, decoded) => {
    if (error) throw res.status(401).json({ message: error.message || "token error!" });

    const { id } = decoded as JwtPayload;
    req.userID = id;

    return next();
  });
}
