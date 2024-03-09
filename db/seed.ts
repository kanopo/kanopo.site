import pool from "@/db/db"
import { readFile } from "fs/promises";
import { Pool } from "pg";

const seed = async (pool: Pool): Promise<boolean> => {
    if (process.env.NODE_ENV !== 'production') {
        let seedQuery;
        try {
            seedQuery = await readFile("./db/seed.sql").then((data) => data.toString());
        } catch (error) {
            console.error("Error reading seed file: ", error);
            return false;
        }

        try {
            await pool.query(seedQuery);
            return true;
        } catch (error) {
            console.error("Error seeding database: ", error);
            return false;
        }
    } else {
        console.error("Database not seeded in production");
        return false;
    }
}


seed(pool).then((result) => {
    console.log("Database seeded: ", result);
    pool.end();
})
