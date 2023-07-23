import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import { getAllProductsFromDB } from '../../services/api'
import '../toDoListAdministracion/toDoListAdministration.css';

const DataList = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getAllProductsFromDB()
    .then(({data}) => {
      setDataApi(data)
    })
    .catch(error => console.log(error))
  }, [])

  const fetchData = () => {
    fetch('/api/get-data')
      .then((response) => response.json())
      .then((data) => {
        setDataList(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  };

  return (
    <div className='divPadreDataList'>
      <h3>LISTA DE PRODUCTOS</h3>
      <hr></hr>
      {dataList.length === 0 ? (
        <p>No hay datos disponibles.</p>
      ) : (
        <ul>
          {dataList.map((data, index) => (
            <li key={index}>
              <p>Nombre: {data.nombre}</p>
              <p>Categoría: {data.categoria}</p>
              <p>Precio: {data.precio}</p>
              <p>Stock: {data.stock}</p>
              <p>Descripción: {data.descripcion}</p>
              <img src={data.imagen} alt="Imagen" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataList;