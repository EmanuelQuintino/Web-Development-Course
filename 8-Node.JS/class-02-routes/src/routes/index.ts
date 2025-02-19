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
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const users = [
    { id: 1, name: "Ash", age: 10 },
    { id: 2, name: "Mestre Came", age: 300 },
    { id: 3, name: "Alucard", age: 597 },
  ];

  res.json(users[Number(id) - 1] || {});
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
