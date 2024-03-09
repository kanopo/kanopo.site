import { Pool } from 'pg';
import { readFile } from 'fs/promises';
import bcrypt from 'bcrypt';
const SALT_ROUNDS = 15;


const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;
const CONNECTION_STRING = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}`

const pool = new Pool({
    connectionString: CONNECTION_STRING
})

export default pool;



const createUser = async (pool: Pool, username: string, password: string): Promise<boolean> => {
    // TODO: add time stamp with timezone
    const timestamp = new Date().toISOString();
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const query = {
        text: 'INSERT INTO public.user (username, password, created_at, updated_at) VALUES ($1, $2, $3, $4)',
        values: [username, hashedPassword, timestamp, timestamp]
    }

    try {
        const result = await pool.query(query);
        console.log("User created successfully: ", result);
        return true;
    } catch (error) {
        console.error("Error creating user: ", error);
        return false;
    }
}

export { createUser };

const checkUser = async (pool: Pool, username: string, password: string): Promise<boolean> => {
    const query = {
        text: 'SELECT * FROM public.user WHERE username = $1',
        values: [username]
    }

    const result = await pool.query(query);

    if (result.rowCount === 1) {
        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password);
        return match;
    } else {
        return false;
    }
}

export { checkUser };
