import express from "express";

import { getPerguntas, postPerguntas } from "../controllers/salaController.js";

const salaRouter = express.Router();

salaRouter.get("/sala", getPerguntas);
salaRouter.post("/sala", postPerguntas);

export default salaRouter;
