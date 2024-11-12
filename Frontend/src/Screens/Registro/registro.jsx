import React, { useState } from 'react';
import './registro.css';

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        numero_cuenta: '',
        tipo: '',
        saldo: ''
    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Datos enviados:', formData); // Verifica que los datos estén correctos

        try {
            const response = await fetch('http://localhost:3000/api/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccessMessage(result.message);
                setError(null);
            } else {
                setSuccessMessage(null);
                setError(result.message || 'Hubo un error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            setError('Hubo un error al registrar el usuario. Intenta nuevamente.');
            setSuccessMessage(null);
        }
    };

    return (
        <div className="contenedor-registro">
            <div className="fondo-registro"></div>
            <img src="../src/assets/GifsYfotos/Logo.png" alt="Logo del Banco" className="logo" />
            <form className="formulario-registro" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="entrada-registro"
                    placeholder="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    className="entrada-registro"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    className="entrada-registro"
                    placeholder="Contraseña"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    className="entrada-registro"
                    placeholder="Número de Cuenta (Celular)"
                    name="numero_cuenta"
                    value={formData.numero_cuenta}
                    onChange={handleChange}
                    required
                    pattern="[0-9]*" // Solo permite valores numéricos
                />
                <select
                    className="entrada-registro"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled hidden>Tipo</option>
                    <option value="ahorros">Ahorros</option>
                    <option value="corriente">Corriente</option>
                </select>
                <input
                    type="number"
                    className="entrada-registro"
                    placeholder="Saldo"
                    name="saldo"
                    value={formData.saldo}
                    onChange={handleChange}
                    required
                    pattern="[0-9]*" // Solo permite valores numéricos
                />
                <button type="submit" className="boton-registro">Registrar</button>
                <button type="button" className="boton-menu-principal" onClick={() => window.location.href = '/'}>Volver al Menú Principal</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}
        </div>
    );
};

export default Registro;
