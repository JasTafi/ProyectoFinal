import React, { useEffect, useState, useContext} from "react";

import { DataProvider } from "../../context/DataContext";

import { getAllProductsFromDB } from "../../services/product_service";
import CategoryAccordion from "../categoryAccordion/CategoryAccordion";

import "../toDoListAdministracion/toDoListAdministration.css";

const dataList = () => {
  const [dataApi, setDataApi] = useState([]);
  const { producto, setProducto } = useContext(DataProvider);

  useEffect(() => {
    getAllProductsFromDB()
      .then(({ data }) => {
        setDataApi(data);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setProducto(false)
      })
  }, [producto]);

  const uniqueCategories = [...new Set(dataApi.map((item) => item.categoria))];

  return (
    <section className="toDoListSection section">
        <h3 className="section-title">LISTA DE PRODUCTOS</h3>
        <hr />
      <div className="toDoList-container container grid">
        {uniqueCategories.map((category) => (
          <CategoryAccordion
            key={category}
            category={category}
            products={dataApi}
          />
        ))}
      </div>
    </section>
  );
};

export default dataList;
