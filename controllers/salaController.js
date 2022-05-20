import db from "../db.js";

export async function getPerguntas(req, res) {
    const perguntas = await db.collection('sala').find({}).toArray();
    res.status(200).send(perguntas);
}
export async function postPerguntas(req, res) {
    
}
