import { useState, useEffect, useContext } from "react";
import { DataProvider } from "../../context/DataContext";

import { useParams, Link, useNavigate } from "react-router-dom";

import { Notification } from "../../services/tostifyNot";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

import { getProductByIdFromDb } from "../../services/product_service";

import { GetFavoriteProduct } from "../../services/user_service";
import "../detalleDeProducto/ProductDetail.css";
import { useHandleAddFavorite } from "../../hooks/useHandleAddFavorite";
import { useHandleAddCar } from "../../hooks/useHandleAddCar";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    userInfo: { user, islogged },
    producto,
    setProducto,
  } = useContext(DataProvider);
  const navigate = useNavigate()
  //custom para manejar addFavorites
  const handleAddFavorites = useHandleAddFavorite();
  //custom para manejar addCar
  const handleAddCar = useHandleAddCar();
  const [data, setData] = useState([]);
  //manejo los favoritos
  const [favorites, setFavorites] = useState();
  const [num, setNum] = useState(1);
  const [addedFav, setAddedFav] = useState(false);

  const stock = data.stock;

  function sumar() {
    if (num < stock) {
      setNum(num + 1);
    }
  }
  function restar() {
    if (num == 1) {
      setNum(1);
    } else {
      setNum(num - 1);
    }
  }

  useEffect(() => {
    getProductByIdFromDb(id)
      .then((res) => {
        setData(res);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setProducto(false);
      });

    if (islogged) {
      GetFavoriteProduct({
        id: user.id,
        token: user.token,
      })
        .then(({ favorite_producs }) => {
          setFavorites(favorite_producs);
        })
        .catch((err) => console.log(err));
    }
  }, [producto]); //datacontext para ver si renderiza el producto al hacer click en containerResults

  function obtenerId() {
    const arrayId = [];
    favorites.map((item) => {
      arrayId.push(item._id);
    });
    return arrayId;
  }
  function compararProductos() {
    //ver esta funcion que queda en desuso
    const productoSinAgregar = id;
    const productosAgregados = obtenerId();
    return productosAgregados.includes(productoSinAgregar);
  }

  function handleCompare() {
    if (islogged) {
      if (compararProductos()) {
        Notification({
          message: "El producto ya se encuentra agregado",
          type: "error",
        });
      } else {
        handleAddFavorites(id);
      }
    } else {
      Notification({
        message: "Debes iniciar sesion para agregar favoritos",
        type: "error",
      });
    }
  }
  function addProduct() {
    handleAddCar(id);
  }
  function handleBuy(){
    if(!islogged){
      Notification({
        message: "Debes iniciar sesion para comprar el producto",
        type: "error",
      });
    }else{
      handleAddCar(id)
      navigate('/compra')
    }

  }
  return (
    <section className="section-product-detail section">
      <div className="product-detail-container container grid">
        <article className="product-detail-content">
          <Link to={"/"} className="linkBack">
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            Inicio
          </Link>
          <div className="boxCateogy">
            <div className="category">{data.categoria}</div>
            <button
              onClick={() => {
                handleCompare();
              }}
            >
              <FontAwesomeIcon
                icon={faHeart}
                className={addedFav ? "iconHeart" : ""}
              />
            </button>
            <p>Agregar a lista de deseos.</p>
          </div>
          <h2 className="product-title">{data.nombre}</h2>
          <div className="boxDetail">
            <p>TYPE: {data.categoria}</p>
            <p>Stock: {data.stock}</p>
          </div>
          <p className="product-description">
            Descripcion del producto: {data.Descripcion}
          </p>
          <div className="boxInputSelect">
            <label htmlFor="color">Color:</label>
            <select name="" id="color">
              <option value="color1">Negro</option>
              <option value="color2">Blanco</option>
            </select>
          </div>
          <div className="boxPrice1">
            <span className="precio">$ {data.precio}</span>
            <div className="boxQuantity">
              <p>Cantidad:</p>
              <div className="lbl">
                <button onClick={restar}>-</button>
                <span className="num">{num}</span>
                <button onClick={sumar} disabled={num == stock}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="boxBuyAndAdd">
            <button onClick={addProduct}>Agregar al carrito</button>
            <button onClick={handleBuy}>Comprar ya!</button>
          </div>
        </article>

        <article className="containerPictures">
          <div className="borderColorBox">
            <div className="container-img">
              <img src={data.urlImg} alt={data.nombre} title={data.nombre} />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductDetail;
