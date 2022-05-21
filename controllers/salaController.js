import db from "../db.js";

export async function getPerguntas(req, res) {
	const { id } = req.body;
	const perguntas = await db.collection("home").findOne({ _id: id });
	res.status(200).send(perguntas);
}
export async function postPerguntas(req, res) {
	try {
		const pergunta = req.body;

		//TODO: JOI verification

		await db.collection("sala").insertOne(pergunta);
		res.sendStatus(201);
	} catch (error) {
		console.log(`postPerguntas error: ${error}`);
	}
}
