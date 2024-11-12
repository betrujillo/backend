// routes/banco.route.js
import express from 'express';
import { registrarUsuario } from '../controllers/registro.controller.js';
import { iniciarSesion } from '../controllers/login.controller.js';

const router = express.Router();

// Ruta para el registro de un nuevo usuario
router.post('/registro', registrarUsuario);

// Ruta para el inicio de sesión
router.post('/login', iniciarSesion);

export default router;
