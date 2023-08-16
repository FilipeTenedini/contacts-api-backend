import pg from 'pg';
import 'dotenv/config';

const { Client } = pg;
const {
  DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME,
} = process.env;

const client = new Client({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

client.connect();

const query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
}

export default { query };
