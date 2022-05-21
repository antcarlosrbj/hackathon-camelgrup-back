import { ObjectId } from "mongodb";
import db from "../db.js";

export async function postPergunta(req, res) {
    try {
        const {id} = req.body;

        const pergunta = {
            autor: req.body.autor,
            titulo: req.body.titulo,
            respostas: []
        };

        //TODO: JOI verification

        const sala = await db.collection('home').find({ _id: ObjectId(id)}).toArray();


        await db.collection('home').updateOne(
            { _id: ObjectId(id)},
            
            {
                $set: {
                  perguntas: [...sala[0].perguntas, pergunta]
                },
            },
            
            { upsert: true }
        );
        res.send("Deu certo");

    } catch (error) {
        console.log(`postPergunta error: ${error}`)
    }
}


export async function postResposta(req, res) {
    try {
        /* const pergunta = req.body; */

        //TODO: JOI verification

        /* await db.collection('sala').insertOne(pergunta); */
        res.sendStatus(201);

    } catch (error) {
        console.log(`postResposta error: ${error}`)
    }
}
