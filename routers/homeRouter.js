import express from "express";

import { getSalas } from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/", getSalas);

export default homeRouter;