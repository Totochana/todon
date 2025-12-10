import express from 'express';
import taskRoutes from './routes/taskRouters.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();


app.use("/api", taskRoutes);

connectDB();

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});

