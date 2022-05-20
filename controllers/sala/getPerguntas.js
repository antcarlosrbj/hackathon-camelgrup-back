import db from "../../db.js";

export default async function getPerguntas(req, res) {
    const perguntas = await db.collection('sala').find({}).toArray();
    res.status(200).send(perguntas);
}