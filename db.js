import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let db = null;
const mongoClient = new MongoClient(process.env.MONGO_URL);

try{
    await mongoClient.connect();
    db = mongoClient.db("dbRespondeAqui");
    console.log('Banco de Dados Conectado');
} catch (error) {
    console.log(error);
}

export default db;