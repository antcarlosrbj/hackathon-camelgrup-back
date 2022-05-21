import { ObjectId } from "mongodb";
import db from "../db.js";

export async function getSalas(req, res) {
    console.log(req);
    if(req.method === "GET") {
        const salas = await db.collection('home').find({}).toArray();
        res.status(200).send(salas);
    } else {
        const {id} = req.body;
        const salas = await db.collection('home').findOne({_id: ObjectId(id)});
        res.status(200).send(salas);
    }
}


export async function postSalas(req, res) {
    try {
        const sala = req.body;

        //TODO: JOI verification

        await db.collection('home').insertOne({...sala, perguntas: []});

        res.sendStatus(201);

    } catch (error) {
        console.log(`postSalas error: ${error}`)
    }
}