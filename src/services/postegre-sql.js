import PgAsync from "pg-async";

import {
    POSTGRESQL_USER,
    POSTGRESQL_PASS,
    POSTGRESQL_URL,
    POSTGRESQL_DB
} from "../config";

let dbInstance;

export default function getPostgreClient () {
    if (!dbInstance) {
        dbInstance = new PgAsync(`postgres://${POSTGRESQL_USER}:${POSTGRESQL_PASS}@${POSTGRESQL_URL}/${POSTGRESQL_DB}`);
    }
    return dbInstance;
}
