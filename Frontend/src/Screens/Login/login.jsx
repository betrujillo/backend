import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    // Función para manejar el inicio de sesión
    const manejarInicioSesion = async (e) => {
        e.preventDefault();
        
        // Verificar si ambos campos están completos
        if (correo && contrasena) {
            try {
                // Enviar la solicitud POST al backend
                const response = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: correo, contraseña: contrasena }),
                });

                // Obtener la respuesta en formato JSON
                const data = await response.json();

                if (response.status === 200) {
                    // Si el inicio de sesión es exitoso
                    console.log(data.message);  // "Inicio de sesión exitoso"
                    navigate('/Perfil'); // Redirigir a la página de perfil
                } else {
                    // Si las credenciales son incorrectas
                    alert(data.message);  // Mostrar mensaje de error
                }
            } catch (error) {
                console.error('Error en la conexión con el servidor:', error);
                alert('Error en el servidor, intenta nuevamente');
            }
        } else {
            // Si algún campo está vacío
            alert('Por favor, completa todos los campos.');
        }
    };

    return (
        <div className="contenedor-login">
            <div className="fondo"></div> {/* Div para el fondo */}
            <img 
                src="../src/assets/GifsYfotos/Logo.png" 
                alt="Logo del Banco" 
                className="logo" 
            />
            <form className="formulario-login" onSubmit={manejarInicioSesion}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="entrada-login"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    className="entrada-login"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                <button type="submit" className="boton-login">Iniciar Sesión</button>
            </form>
            <button
                className="boton-toggle"
                onClick={() => navigate('/registro')}
            >
                Regístrate
            </button>
            <button
                className="boton-perfil"
                onClick={() => navigate('/Perfil')}
            >
                Ir a Perfil
            </button>
        </div>
    );
}
