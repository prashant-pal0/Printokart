import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../models/user';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [User],
    synchronize: true, // Automatically sync database (disable in production)
});
