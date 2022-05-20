import db from "../db.js";

export async function getSalas(req, res) {
    const salas = await db.collection('home').find({}).toArray();
    res.status(200).send(salas);
}
export async function postSala(req, res) {
    
}