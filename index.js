import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import salaRouter from "./routers/salaRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(salaRouter);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Servidor Aberto na Porta ${port}`);
});