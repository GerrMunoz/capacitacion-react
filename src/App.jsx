import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cocteles from './sections/Cocteles/Cocteles';
import Pagina404 from './sections/Pagina404/Pagina404';
import Receta from './sections/Receta/Receta';

import './styles.css';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Navigate to="receta" replace />} />
                <Route path="receta" element={<Receta />} />
                <Route path="cocteles" element={<Cocteles />} />
                <Route path="*" element={<Pagina404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
