import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";

import Loader from "../loader/Loader";

import { GetFavoriteProduct } from "../../services/user_service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CardFavorites } from "./CardFavorites";
import { DataProvider } from "../../context/DataContext";

import "../favoritos/Favoritos.css";

const Favoritos = () => {
  const [loading, setLoading] = useState(false);
  const [fav, setFav] = useState([]);
  const { userInfo, producto, setProducto } = useContext(DataProvider);

  useEffect(() => {
    setLoading(true);
    GetFavoriteProduct({
      id: userInfo.user.id,
      token: userInfo.user.token,
    })
      .then(({ favorite_producs }) => {
        setFav(favorite_producs)
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000),
        setProducto(false)
      });
  }, [producto]);
 const favoritos = fav.length > 0
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="containerGral">
          <div className="containerFav">
            <div className="ventanaFav">
              <div className="boxTitleFav">
                <Link to={"/"} className="linkBack">
                  <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                  Inicio
                </Link>
                <h2>Lista de Favoritos</h2>
                <p>
                  Aquí podras ver todos los productos que hayas seleccionado,
                  así como también quitarlos si encuentras uno mejor!.
                </p>
              </div>
              <div className="boxFav">
                <h3>Favoritos {fav.length}</h3>
                <div className="containerCardFav">
                  {fav.length == 0 ? (
                    <div className="favEmpty">
                      <h2>No tienes productos agregados a favoritos!</h2>
                    </div>
                  ) : (
                    <CardFavorites
                      fav={fav}
                    />
                  )}
                </div>
                {favoritos.length > 0 && (
                  <div className="buttonsFav">
                    <Link to={"/"} className="buttonCartFav">seguir comprando</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favoritos;
