import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './transferencias.css';

const Transferencias = () => {
    const navigate = useNavigate(); // Inicializa useNavigate
    const [tipoOperacion, setTipoOperacion] = useState('transferencia');
    const [monto, setMonto] = useState('');
    const [destino, setDestino] = useState('');
    const [cuentaId, setCuentaId] = useState('');
    const [historico, setHistorico] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fecha = new Date().toLocaleString();

        const nuevaTransaccion = {
            cuenta_id: cuentaId,
            tipo: tipoOperacion,
            monto: monto,
            fecha: fecha,
        };

        setHistorico([...historico, nuevaTransaccion]);
        console.log(nuevaTransaccion);
    };

    return (
        <div className="perfil-body">
            <nav className="barra-navegacion">
                <img src="../src/assets/GifsYfotos/Logo.png" alt="Logo" className="logo-banco" />
                <a onClick={() => navigate('/perfil')}>Perfil</a> {/* Enlace agregado */}
                <a onClick={() => navigate('/transferencias')}>Transferencias</a>
                <a onClick={() => navigate('/prestamos')}>Solicitudes de Préstamos</a>
                {/* Actualiza la ruta aquí */}
                <a onClick={() => navigate('/reportes-financieros')}>Reportes Financieros</a> 
            </nav>
            <div className="contenedor-perfil">
                <h2 className="titulo-transferencias">Realizar una Operación</h2>
                <form className="formulario-transferencia" onSubmit={handleSubmit}>
                    <label>
                        Cuenta ID:
                        <input 
                            type="number"
                            value={cuentaId} 
                            onChange={(e) => setCuentaId(e.target.value)} 
                            required 
                        />
                    </label>

                    <label>
                        Seleccionar operación:
                        <select 
                            value={tipoOperacion} 
                            onChange={(e) => setTipoOperacion(e.target.value)}
                        >
                            <option value="transferencia">Transferencia</option>
                            <option value="deposito">Depósito</option>
                            <option value="retiro">Retiro</option>
                        </select>
                    </label>

                    <label>
                        Monto:
                        <input 
                            type="number" 
                            value={monto} 
                            onChange={(e) => setMonto(e.target.value)} 
                            required 
                        />
                    </label>

                    {tipoOperacion === 'transferencia' && (
                        <label>
                            Destino (número de cuenta):
                            <input 
                                type="number" 
                                value={destino} 
                                onChange={(e) => setDestino(e.target.value)} 
                                required 
                            />
                        </label>
                    )}

                    <button type="submit" className="btn-transferir">Confirmar</button>
                </form>

                <div className="seccion-historico">
                    <h2>Histórico de Transacciones</h2>
                    <ul className="lista-transferencias">
                        {historico.map((transaccion, index) => (
                            <li key={index}>
                                {`Cuenta ID: ${transaccion.cuenta_id}, Tipo: ${transaccion.tipo}, Monto: ${transaccion.monto}, Fecha: ${transaccion.fecha}`}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Transferencias;
