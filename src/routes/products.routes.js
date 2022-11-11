import { Router } from "express";
import { getProducts, getProduct } from "../controller/products.controller.js";

const router = Router();

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

export default router;