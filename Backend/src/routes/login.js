const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db'); // Asumiendo que tienes configurada la conexión a la base de datos
const router = express.Router();

// Ruta para verificar las credenciales
router.post('/api/login', async (req, res) => {
    const { usuario, contraseña } = req.body;

    if (!usuario || !contraseña) {
        return res.status(400).json({ message: 'Por favor, complete todos los campos.' });
    }

    try {
        // Verifica si el usuario existe
        const [rows] = await pool.query('SELECT * FROM login WHERE usuario = ?', [usuario]);
        
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Usuario o contraseña incorrectos.' });
        }

        // Compara la contraseña con el hash almacenado
        const isMatch = await bcrypt.compare(contraseña, rows[0].contraseña);
        
        if (isMatch) {
            res.status(200).json({ message: 'Inicio de sesión exitoso.' });
        } else {
            res.status(400).json({ message: 'Usuario o contraseña incorrectos.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor.' });
    }
});

module.exports = router;
