//contains the connection to database
import dotenv from 'dotenv'

dotenv.config();

import { MongoClient, ServerApiVersion } from "mongodb";

//local host does not work now so use the below
const uri = `${process.env.DATABASE_URL}`;

const connection = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
// client.connect();
// block to connect to DB and collection. 
async function connectToDB(dbName, collectionName) {
    try {
        await connection.connect()
        console.log("Connected to database");

        const myDb = connection.db('INFIGONFUTURE');
        return myDb.collection(collectionName);
    } catch (e) {
        console.error(e);
        console.log("Could not connect to db")
    }
};

async function closeConnection() {
    try {
        await connection.close()
    } catch (e) {
        console.error(e);
        console.log("Could not close connection to db")
    }
};

export { connectToDB, closeConnection };