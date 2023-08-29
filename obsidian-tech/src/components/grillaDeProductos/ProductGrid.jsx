import { CardProduct } from "../tarjetasDeProductos/CardProduct";

import { BestProducts } from "../bestProducts/BestProducts";

import "../grillaDeProductos/ProductGrid.css";
export const ProductGrid = () => {
  return (
    <>
      <div className="gridContainer">
        <CardProduct />
        <BestProducts />
      </div>
    </>
  );
};
