import express from "express";

import { getSalas, postSalas } from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/", getSalas);
homeRouter.post("/", postSalas);

export default homeRouter;