import { useState, useEffect, useContext } from "react";
import { DataProvider } from "../../context/DataContext";

import { useParams, Link } from "react-router-dom";

import { Notification } from "../../services/tostifyNot";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart } from "@fortawesome/free-solid-svg-icons";

import { getProductByIdFromDb } from "../../services/product_service";

import {
  AddCarProduct,
  AddFavoriteProduct,
  GetFavoriteProduct,
} from "../../services/user_service";
import "../detalleDeProducto/ProductDetail.css";
import { useHandleAddFavorite } from "../../hooks/useHandleAddFavorite";

const ProductDetail = () => {
  const { id } = useParams();
  const { userInfo: {user, islogged}, producto, setProducto } = useContext(DataProvider);
  //custom para manejar addFavorites
  const handleAddFavorites = useHandleAddFavorite();
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
        setData(res)
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
  function compararProductos() {//ver esta funcion que queda en desuso
    const productoSinAgregar = id;
    const productosAgregados = obtenerId();
    return productosAgregados.includes(productoSinAgregar)
  }


  // function handleAddFavorites() {
  //   if (islogged) {
  //     if(compararProductos()){
  //       Notification({
  //         message: "El producto ya se encuentra agregado",
  //         type: "error",
  //       });
  //     }else {
  //       AddFavoriteProduct({
  //         userId: user.id,
  //         productId: id,
  //         token: user.token,
  //       })
  //         .then((res) => {
           
  //             Notification({
  //               message: "Producto agregado a favoritos",
  //               type: "success",
  //             });
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   } else {
  //     Notification({
  //       message: "Debes iniciar sesion para agregar favoritos",
  //       type: "error",
  //     });
  //   }
  // }
  function handleAddCar() {
    if (!islogged) {
      Notification({
        message: "Debes iniciar sesion para agregar productos",
        type: "error",
      });
      return false;
    }
    AddCarProduct({
      userId: user.id,
      productId: id,
      token: user.token,
    })
      .then((res) => {
        Notification({
          message: "Producto agregado al carrito",
          type: "success",
        }),
          setProducto(true);
      })
      .catch((err) => console.log(err));
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
            <button onClick={() => {
              handleAddFavorites(id)
            }}>
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
            <button onClick={handleAddCar}>Agregar al carrito</button>
            <button>Comprar ya!</button>
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
