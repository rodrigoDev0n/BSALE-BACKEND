import { pool } from "../db.js";

/* Trae todos los productos */
export const getProducts = async (req, res) => {
    try {
        const [products] = await pool.query('SELECT*FROM product');
        res.json(products);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
}

/* Trae un producto dependiendo de su id */
export const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const [product] = await pool.query('SELECT*FROM product WHERE id=?', [id]);
        res.json(product);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
}

/*  Trae un producto dependiendo de su nombre */
export const getProductByName = async (req, res) => {
    try {
        const name = req.params.name;
        const [product] = await pool.query(`SELECT*FROM product WHERE name like '%${name}%'`);
        product.length === 0 
        ? res.json('No se encontro el producto que estas buscando')
        : res.json(product);
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong',
        });
    }
}

