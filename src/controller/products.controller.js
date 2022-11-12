import { pool } from "../db.js";

/* Trae todos los productos */
export const getProducts = async (req, res) => {
    const [products] = await pool.query('SELECT*FROM product');
    res.json(products);
}

/* Trae un producto dependiendo de su id */
export const getProduct = async (req, res) => {
    const id = req.params.id;
    const [product] = await pool.query('SELECT*FROM product WHERE id=?', [id]);
    res.json(product);
}

/*  Trae un producto dependiendo de su nombre */
export const getProductByName = async (req, res) => {
    const name = req.params.name;
    const [product] = await pool.query(`SELECT*FROM product WHERE name like '%${name}%'`);
    res.json(product);
}

