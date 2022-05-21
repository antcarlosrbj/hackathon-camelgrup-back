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
        const {id} = req.body;
        const pergunta = Number(req.body.pergunta);

        const resposta = {
            autor_resposta: req.body.autor_resposta,
            resposta: req.body.resposta
        };

        //TODO: JOI verification

        const sala = await db.collection('home').find({ _id: ObjectId(id)}).toArray();


       /*  await db.collection('home').updateOne(
            { _id: ObjectId(id)},
            
            {
                $set: {
                  respostas: [...sala[0].perguntas[req.body.pergunta], resposta]
                },
            },
            
            { upsert: true }
        ); */

        res.send(sala[0].perguntas[pergunta].respostas);

    } catch (error) {
        console.log(`postPergunta error: ${error}`)
    }
}
