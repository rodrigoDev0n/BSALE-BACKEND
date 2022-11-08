import { pool } from "../db.js";

/* Trae todos los productos */
export const getProducts = async (req, res) => {
    const products = await pool.query('SELECT*FROM product');
    res.json(products);
}

/* Trae un producto dependiendo de su id */
export const getProduct = async (req, res) => {
    const id = req.params.id;
    const product = await pool.query('SELECT*FROM product WHERE id=?', id);
    res.json(product);
}

/* Trae los productos dependiendo de su categoria */
export const getCategory = async (req, res) => {
    const category = req.params.category
    const categoria = await pool.query('SELECT*FROM product WHERE category=?', category);
    res.json(categoria);
}