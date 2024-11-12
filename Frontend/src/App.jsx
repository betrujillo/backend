import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Screens/Login/Login';
import Registro from './Screens/Registro/Registro'; 
import Perfil from './Screens/Perfil/Perfil';
import Transferencias from './Screens/Transferencias/Transferencias';
import Prestamos from './Screens/Prestamos/prestamos';
import ReportesFinancieros from './Screens/ReportesFinancieros/reportesFinancieros';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/registro' element={<Registro />} />
                <Route path='/Perfil' element={<Perfil />} />
                <Route path='/transferencias' element={<Transferencias />} />
                <Route path='/prestamos' element={<Prestamos />} />
                <Route path='/reportes-financieros' element={<ReportesFinancieros />} />
                
            </Routes>
        </Router>
    );
}

export default App;
