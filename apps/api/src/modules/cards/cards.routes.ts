import { Router } from "express";

export const cardsRouter = Router();

const cards = [
  {
    id: 1,
    deckId: 1,
    type: "flashcard",
    question: "What does DNS stand for?",
    answer: "Domain Name System"
  },
  {
    id: 2,
    deckId: 1,
    type: "code",
    question: "What is the output of [1,2,3].map(n => n * 2)?",
    answer: "[2,4,6]"
  }
];

cardsRouter.get("/due", (_req, res) => res.json(cards));

cardsRouter.post("/", (req, res) => {
  res.json({ message: "Card created", card: { id: Date.now(), ...req.body } });
});
