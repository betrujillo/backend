import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bancoRoutes from './routes/banco.route.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());  // Para procesar cuerpos de solicitudes JSON

// Usar las rutas definidas
app.use('/api', bancoRoutes);

app.set('port', process.env.PORT || 3000);

export default app;
