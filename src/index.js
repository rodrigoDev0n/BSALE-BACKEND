import express from 'express';
import productRoutes from "./routes/products.routes.js";

const app = express();
app.use('/api', productRoutes);

app.listen(3000);
console.log('servidor corriendo en el puerto 3000');