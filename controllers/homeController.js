import db from "../db.js";

export async function getSalas(req, res) {
    const salas = await db.collection('home').find({}).toArray();
    res.status(200).send(salas);
}


export async function postSala(req, res) {
    try {
        const sala = req.body;

        //TODO: JOI verification

        await db.collection('home').insertOne(sala);
        res.sendStatus(201);

    } catch (error) {
        console.log(`postSala error: ${error}`)
    }
}