import { Router } from "express";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { signToken } from "../../lib/auth.js";

export const authRouter = Router();

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

authRouter.post("/register", async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  const passwordHash = await bcrypt.hash(parsed.data.password, 10);

  return res.json({
    message: "User registered",
    user: {
      id: 1,
      email: parsed.data.email,
      passwordHashPreview: passwordHash.slice(0, 10) + "..."
    }
  });
});

authRouter.post("/login", async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json(parsed.error.flatten());

  return res.json({
    token: signToken({ userId: 1, email: parsed.data.email }),
    user: { id: 1, email: parsed.data.email }
  });
});
