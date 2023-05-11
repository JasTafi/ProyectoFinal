import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import InicioPage from './page/Iniciopage';
import AdministracionPage from './page/AdministracionPage';
import RecContraseñaPage from './page/RecContraseñaPage';
import NosotrosPage from './page/NosotrosPage';
import Error404Page from './page/Error404Page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InicioPage />} />
        <Route path='administracion' element={<AdministracionPage />} />
        <Route path='recContraseña' element={<RecContraseñaPage />} />
        <Route path='nosotros' element={<NosotrosPage />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
