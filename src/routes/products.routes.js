import { Router } from "express";
import { getProducts, getProduct, getProductByName } from "../controller/products.controller.js";

const router = Router();

router.get('/products', getProducts);

router.get('/products/:name', getProductByName);

export default router;