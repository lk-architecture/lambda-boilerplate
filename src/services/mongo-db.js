import {MongoClient} from "mongodb";

import {MONGODB_URL} from "../config";

let dbInstance;

export async function getMongoClient () {
    if (!dbInstance) {
        dbInstance = await MongoClient.connect(MONGODB_URL);
    }
    return dbInstance;
}
