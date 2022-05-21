import express from "express";

import { postPergunta, postResposta } from "../controllers/salaController.js";

const salaRouter = express.Router();

salaRouter.post("/pergunta", postPergunta);
salaRouter.post("/resposta", postResposta);

export default salaRouter;
