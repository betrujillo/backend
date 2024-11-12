import React from 'react';
import { useNavigate } from 'react-router-dom';
import './prestamos.css';

const Prestamos = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Solicitud de préstamo enviada');
    };

    return (
        <div className="prestamos-body">
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

            <div className="contenedor-prestamos">
                <h1 className="titulo-prestamos">Solicitudes de Préstamos</h1>

                <form className="formulario-prestamo" onSubmit={handleSubmit}>
                    <h2 className="titulo-formulario">Solicitar un Préstamo</h2>

                    <div className="campo-prestamo">
                        <label htmlFor="usuario_id">Usuario ID</label>
                        <input type="text" id="usuario_id" name="usuario_id" required />
                    </div>

                    <div className="campo-prestamo">
                        <label htmlFor="monto">Monto</label>
                        <input type="number" id="monto" name="monto" required />
                    </div>

                    <div className="campo-prestamo">
                        <label htmlFor="plazo">Plazo (en meses)</label>
                        <input type="number" id="plazo" name="plazo" required />
                    </div>

                    <div className="campo-prestamo">
                        <label htmlFor="estado">Estado</label>
                        <select id="estado" name="estado" required>
                            <option value="pendiente">Pendiente</option>
                            <option value="aprobado">Aprobado</option>
                            <option value="rechazado">Rechazado</option>
                        </select>
                    </div>

                    <div className="campo-prestamo">
                        <label htmlFor="fecha_solicitud">Fecha de Solicitud</label>
                        <input type="date" id="fecha_solicitud" name="fecha_solicitud" required />
                    </div>

                    <button type="submit" className="boton-prestamo">Enviar Solicitud</button>
                </form>
            </div>
        </div>
    );
};

export default Prestamos;
