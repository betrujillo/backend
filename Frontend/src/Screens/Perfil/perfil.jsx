import React from 'react';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

const Perfil = () => {
    const navigate = useNavigate();

    return (
        <div className="perfil-body">
            <div className="barra-navegacion">
                <img 
                    src="../src/assets/GifsYfotos/Logo.png" 
                    alt="Logo" 
                    style={{ width: '100%', marginBottom: '20px' }}
                />
                <a onClick={() => navigate('/perfil')}>Perfil</a> {/* Enlace agregado */}
                <a onClick={() => navigate('/transferencias')}>Transferencias</a>
                <a onClick={() => navigate('/prestamos')}>Solicitudes de Préstamos</a>
                <a onClick={() => navigate('/reportes-financieros')}>Reportes Financieros</a>
            </div>
            <div className="contenedor-perfil">
                <h1 className="titulo-perfil">Perfil del Usuario</h1>
                <div className="seccion-dinamica">
                    <div className="seccion-detalles-usuario">
                        <h2>Detalles del Usuario</h2>
                        <p className="nombre-usuario">Juan Pérez</p>
                        <p className="correo-usuario">juan.perez@ejemplo.com</p>
                        <p className="fecha-registro">Registrado el: 15/03/2023</p>
                    </div>
                    <div className="seccion-saldo">
                        <h2>Saldo de la Cuenta</h2>
                        <p className="saldo-cuenta">$1,000,000</p>
                    </div>
                    <div className="seccion-transacciones">
                        <h2>Detalles Transaccionales</h2>
                        <ul className="lista-transacciones">
                            <li>Transacción 1: $100</li>
                            <li>Transacción 2: $200</li>
                            <li>Transacción 3: $150</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Perfil;
