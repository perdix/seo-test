import { createConnection } from '$lib/db/mysql.js';


export async function load() {

    const connection = await createConnection();
    
    const [rows] = await connection.execute(
        'SELECT * FROM products ORDER BY id DESC'
    );

    return {
        products: rows
    };
}