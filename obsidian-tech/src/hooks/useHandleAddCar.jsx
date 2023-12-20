import { useContext } from "react";
import { DataProvider } from "../context/DataContext";
import { Notification } from "../services/tostifyNot";
import { AddCarProduct } from "../services/user_service"; 

export const useHandleAddCar = () => {
  const {
    userInfo: { user, islogged },
    setProducto,
  } = useContext(DataProvider);

  async function handleAddCar(id) {
    try {
      if (!islogged) {
        Notification({
          message: "Debes iniciar sesion para agregar productos",
          type: "error",
        });
        return false;
      } else {
        await AddCarProduct({
          userId: user.id,
          productId: id,
          token: user.token,
        }).then((res) => {
          Notification({
            message: "Producto agregado al carrito",
            type: "success",
          }),
            setProducto(true);
        });
      }
    } catch (err) {
      console.log(err);
      Notification({
        message: "No se pudo agregar el producto al carrito",
        type: "error",
      });
    }
  }
  return handleAddCar;
};
