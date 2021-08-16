import dotenv from 'dotenv';

dotenv.config();

const port = process.argv[2] || process.env.PORT;

export default port;
