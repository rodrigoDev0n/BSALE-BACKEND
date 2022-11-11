import { pool } from "../db.js";

/* Trae todas las categorias */
export const getAllCategory = async (req, res) => {
    const [category] = await pool.query('SELECT*FROM category');
    res.json(category);
}

/* Trae los productos dependiendo de su categoria */
export const getCategory = async (req, res) => {
    const category = req.params.id;
    const [categoria] = await pool.query('SELECT*FROM product WHERE category=?', [category]);
    res.json(categoria);
}