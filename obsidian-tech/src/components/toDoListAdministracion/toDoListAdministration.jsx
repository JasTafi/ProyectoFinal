import React, { useEffect, useState } from 'react';

import { getAllProductsFromDB } from '../../services/api';

import '../toDoListAdministracion/toDoListAdministration.css';

import CategoryAccordion from '../categoryAccordion/CategoryAccordion';

const dataList = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    getAllProductsFromDB()
      .then(({ data }) => {
        setDataApi(data);
      })
      .catch(error => console.log(error));
  }, []);

  // Obtener la lista de categorías únicas
  const uniqueCategories = [...new Set(dataApi.map(item => item.categoria))];

  return (
    <div className="divPadreDataList">
      <h3>LISTA DE PRODUCTOS</h3>
      <hr />
      {uniqueCategories.map(category => (
        <CategoryAccordion key={category} category={category} products={dataApi} />
      ))}
    </div>
  );
};


export default dataList;
