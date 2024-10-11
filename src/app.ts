import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import { AppDataSource } from './config/database';
import { setupSwagger } from './config/swagger';
import uploadRoutes from './routes/uploadRoutes';

dotenv.config();

// Initialize the database connection
AppDataSource.initialize().then(() => {
    console.log('Data Source has been initialized!');
}).catch((err) => {
    console.error('Error during Data Source initialization', err);
});

const app: Application = express();

// Middleware to parse JSON requests
app.use(express.json());

setupSwagger(app);

// Auth routes
app.use('/user', userRoutes);
app.use('/', uploadRoutes);


export default app;
