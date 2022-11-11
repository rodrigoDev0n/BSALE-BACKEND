import express from 'express';
import cors from 'cors';
import productRoutes from "./routes/products.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(express());
app.use('/api', productRoutes);
app.use('/api', categoriesRoutes);


app.listen(PORT);
console.log('servidor corriendo en el puerto ', PORT);