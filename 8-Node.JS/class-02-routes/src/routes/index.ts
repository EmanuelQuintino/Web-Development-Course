import { Router, Request, Response } from "express";

export const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Class 02 Routes");
});

router.get("/user", (_req: Request, res: Response) => {
  res.send("User");
});

// Route Params
router.get("/user/:id/:name", (req: Request, res: Response) => {
  const { id, name } = req.params;
  res.send(`User:${id} Name:${name}`);
});

// Query Params
router.get("/user", (req: Request, res: Response) => {
  const { id, name } = req.query;
  res.send(`User:${id} Name:${name}`);
});

// Body Params
router.post("/user", (req: Request, res: Response) => {
  const { id, name } = req.body;
  res.send(`User:${id} Name:${name}`);
  res.json({ id, name });
});
