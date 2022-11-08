import { Router } from "express";
import { getProducts, getProduct, getCategory } from "../controller/products.controller.js";

const router = Router();

router.get('/products', getProducts);

router.get('/products/:id', getProduct);

router.get('/category/:category', getCategory);

export default router;