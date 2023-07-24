import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import InicioPage from './page/InicioPage';
import AdministracionPage from './page/AdministracionPage';
import RecContraseñaPage from './page/RecContraseñaPage';
import NosotrosPage from './page/NosotrosPage';
import Error404Page from './page/Error404Page';
import DetalleProductoPage from './page/DetalleProductoPage';

import { ObsidianNavbar } from './components/navegacion/ObsidianNavbar';
import { DataContext } from './context/DataContext';

function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <ObsidianNavbar/>
          <Routes>
            <Route path='/' element={<InicioPage />} />
            <Route path='/accesorio/:id' element={<DetalleProductoPage/>}/>
            <Route path='administracion' element={<AdministracionPage />} />
            <Route path='recContraseña' element={<RecContraseñaPage />} />
            <Route path='nosotros' element={<NosotrosPage />} />
            <Route path='*' element={<Error404Page />} />
          </Routes>
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
