import express from "express";

import { getPerguntas, postPerguntas } from "../controllers/salaController.js";

const salaRouter = express.Router();

salaRouter.post("/sala", getPerguntas);

export default salaRouter;
