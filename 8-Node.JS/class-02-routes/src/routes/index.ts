import { Router, Request, Response } from "express";

export const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send({ className: "Class 02 Routes" });
});

router.get("/users", (_req: Request, res: Response) => {
  res.send([
    { id: 1, name: "Goku" },
    { id: 2, name: "Gohan" },
    { id: 3, name: "Bulma" },
  ]);
});

// route params
router.get("/user/:id/:name", (req: Request, res: Response) => {
  const { id, name } = req.params;
  res.send(`User:${id} Name:${name}`);
});

// query params
router.get("/user", (req: Request, res: Response) => {
  const { id, name } = req.query;
  res.send(`ID:${id} Name:${name}`);
});

// body params
router.post("/user", (req: Request, res: Response) => {
  const { id, name } = req.body;
  res.send(`ID:${id} Name:${name}`);
  res.json({ id, name });
});
