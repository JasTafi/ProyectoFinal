import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import InicioPage from "./page/InicioPage";
import AdministracionPage from "./page/AdministracionPage";
import RecContraseñaPage from "./page/RecContraseñaPage";
import NosotrosPage from "./page/NosotrosPage";
import Error404Page from "./page/Error404Page";
import DetalleProductoPage from "./page/DetalleProductoPage";
import FavoritosPage from "./page/FavoritosPage";
import RegistroPage from "./page/RegistroPage";
import { ObsidianNavbar } from "./components/navegacion/ObsidianNavbar";
import { DataContext } from "./context/DataContext";
import Footer from "./components/footer/Footer";
import { RutaProtejida } from "./components/RutaProtejida/RutaProtejida";
import { PurchasePage } from "./page/PurchasePage";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <ObsidianNavbar />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/accesorio/:id" element={<DetalleProductoPage />} />
          <Route path="administracion" element={<AdministracionPage />} />
          <Route path="/registro" element={<RegistroPage />} />
          <Route path="recContraseña" element={<RecContraseñaPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="favoritos" element={<FavoritosPage />} />
          <Route
            path="/compra"
            element={
              <RutaProtejida>
                <PurchasePage />
              </RutaProtejida>
            }
          />
          <Route path="*" element={<Error404Page />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
