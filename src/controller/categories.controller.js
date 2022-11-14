import { pool } from "../db.js";

/* Trae todas las categorias */
export const getAllCategory = async (req, res) => {
    try {
        const [category] = await pool.query('SELECT*FROM category');
        res.json(category);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
}

/* Trae los productos dependiendo de su categoria */
export const getCategory = async (req, res) => {
    try {
        const category = req.params.id;
        const [categoria] = await pool.query('SELECT*FROM product WHERE category=?', [category]);
        res.json(categoria);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
}