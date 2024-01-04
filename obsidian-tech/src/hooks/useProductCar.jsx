import { useEffect, useState, useContext } from "react";
import { DataProvider } from "../context/DataContext";
import { GetCarProducts } from "../services/user_service";

export const useProductCar = () => {
	const { userInfo: {user, islogged} ,producto, setProducto} =  useContext(DataProvider)

	const [ product, setProduct ] = useState([])

  useEffect(() => {
    if (islogged) {
      GetCarProducts({
        id: user.id,
        token: user.token,
      })
        .then(({ car_products }) => {
          setProduct(car_products);
        })
        .catch((err) => console.log(err))
        .finally(() =>  setProducto(false))
    }else{
      setProduct([])
    }
  }, [islogged,producto])
	
  return { product };
};
