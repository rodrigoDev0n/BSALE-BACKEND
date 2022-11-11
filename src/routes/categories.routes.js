import { Router } from "express";
import { getAllCategory, getCategory } from "../controller/categories.controller.js";

const router = Router();

router.get('/categories', getAllCategory);

router.get('/category/:id', getCategory);

export default router;