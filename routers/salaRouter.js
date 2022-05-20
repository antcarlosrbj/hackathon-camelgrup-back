import express from "express";

import { getPerguntas } from "../controllers/salaController.js";

const salaRouter = express.Router();

salaRouter.get("/sala", getPerguntas);

export default salaRouter;
