import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Controlador para registrar un usuario
export const registrarUsuario = async (req, res) => {
    const { nombre, email, contraseña, numero_cuenta, tipo, saldo } = req.body;

    try {
        // Verificar si el usuario ya existe en la tabla 'registro'
        const [existingUser] = await connection.execute('SELECT * FROM registro WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El correo ya está registrado.' });
        }

        // Insertar el nuevo usuario en la tabla 'registro'
        const [registroResult] = await connection.execute(
            'INSERT INTO registro (nombre, email, contraseña, numero_cuenta, tipo, saldo) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, email, contraseña, numero_cuenta, tipo, saldo]
        );

        // Ahora que el usuario está registrado en la tabla 'registro', insertarlo también en la tabla 'login'
        const [loginResult] = await connection.execute(
            'INSERT INTO login (email, contraseña) VALUES (?, ?)',
            [email, contraseña] // Usamos el mismo email y contraseña
        );

        // Responder al cliente con éxito
        res.status(201).json({ message: 'Usuario registrado exitosamente', id: loginResult.insertId });
    } catch (error) {
        console.error('Error en la base de datos:', error);  // Imprime el error exacto
        res.status(500).json({ message: 'Error en el registro, por favor intente de nuevo.', error: error.message });
    }
};
