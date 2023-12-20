import React, { useContext } from "react";
import { DataProvider } from "../context/DataContext";
import { AddFavoriteProduct } from "../services/user_service";
import { Notification } from "../services/tostifyNot";

export const useHandleAddFavorite = () => {
  const {
    userInfo: { user, islogged },
  } = useContext(DataProvider);

  const handleAddFavorites = async (id) => {
    try {
      if (islogged) {
        await AddFavoriteProduct({
          userId: user.id,
          productId: id,
          token: user.token,
        });

        Notification({
          message: "Producto agregado a favoritos",
          type: "success",
        });
      } else {
        Notification({
          message: "Debes iniciar sesión para agregar a favoritos",
          type: "error",
        });
      }
    } catch (err) {
      console.log(err);
      Notification({
        message: "No se pudo agregar el producto a favoritos",
        type: "error",
      });
    }
  };

  return handleAddFavorites;
};
