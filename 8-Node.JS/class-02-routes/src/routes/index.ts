import { Router, Request, Response } from "express";

export const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ className: "Class 02 Routes" });
});

router.get("/users", (_req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Goku" },
    { id: 2, name: "Gohan" },
    { id: 3, name: "Bulma" },
  ]);
});

// route params
router.get("/user/:id/:name", (req: Request, res: Response) => {
  const { id, name } = req.params;
  res.json({ id, name });
});

// query params
router.get("/user", (req: Request, res: Response) => {
  const { id, name } = req.query;
  res.json({ id, name });
});

// body params
router.post("/user", (req: Request, res: Response) => {
  const { id, name, age } = req.body;
  console.log({ id, name, age });
  res.json({ status: "user create!" });
});
