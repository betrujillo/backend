// controllers/login.controller.js
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Controlador para iniciar sesión
export const iniciarSesion = async (req, res) => {
    const { email, contraseña } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const [rows] = await connection.execute(
            'SELECT * FROM login WHERE email = ?', 
            [email]
        );

        if (rows.length > 0) {
            // Si se encuentra un usuario con el email
            const usuario = rows[0];

            // Comparar la contraseña ingresada con la almacenada en la base de datos
            if (usuario.contraseña === contraseña) {
                // Si las credenciales son correctas
                res.status(200).json({ message: 'Inicio de sesión exitoso' });
            } else {
                // Si la contraseña no coincide
                res.status(401).json({ message: 'Credenciales incorrectas' });
            }
        } else {
            // Si no se encuentra el usuario
            res.status(401).json({ message: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error en la base de datos:', error);
        res.status(500).json({ message: 'Error en el servidor', error: error.message });
    }
};
