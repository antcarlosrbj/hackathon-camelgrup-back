import express from 'express';

import getPerguntas from "../controllers/sala/getPerguntas.js";

const salaRouter = express.Router();

salaRouter.get("/sala", getPerguntas);

export default salaRouter;