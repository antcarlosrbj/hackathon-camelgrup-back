import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import salaRouter from "./routers/salaRouter.js";
import homeRouter from "./routers/homeRouter.js";
import authRouter from "./routers/authRouter.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(salaRouter);
app.use(homeRouter);
app.use(authRouter);

const port = process.env.PORT;
app.listen(port, () => {
	console.log(`Servidor Aberto na Porta ${port}`);
});
