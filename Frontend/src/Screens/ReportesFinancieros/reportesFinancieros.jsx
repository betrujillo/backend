import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './reportesFinancieros.css';

function Reportes() {
    const navigate = useNavigate(); // Inicializa useNavigate

    return (
        <div className="reportes-body">
            <div className="barra-navegacion">
                <img src="../src/assets/GifsYfotos/Logo.png" alt="Logo del Banco" className="logo-banco" />
                <a onClick={() => navigate('/perfil')}>Perfil</a> {/* Enlace agregado */}
                <a onClick={() => navigate('/transferencias')}>Transferencias</a>
                <a onClick={() => navigate('/prestamos')}>Solicitudes de Préstamos</a>
                <a onClick={() => navigate('/reportes')}>Reportes Financieros</a>
            </div>

            <div className="contenedor-reportes">
                <h1>Reportes Financieros</h1>
                <div className="report-item">
                    <h2>Histórico de Ingresos</h2>
                    <p>Aquí se mostrará el historial de ingresos del usuario.</p>
                </div>
                <div className="report-item">
                    <h2>Histórico de Egresos</h2>
                    <p>Aquí se mostrará el historial de egresos del usuario.</p>
                </div>
                <div className="report-item">
                    <h2>Deuda Total</h2>
                    <p>Aquí se mostrará el total de la deuda del usuario.</p>
                </div>
            </div>
        </div>
    );
}

export default Reportes;
