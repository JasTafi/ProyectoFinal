import React, { useEffect, useState } from 'react'

import { getAllProductsFromDB } from '../../services/api'

import '../toDoListAdministracion/toDoListAdministration.css'

const dataList = () => {

  const [dataApi, setDataApi] = useState([])

  useEffect(() => {
    getAllProductsFromDB()
    .then(({data}) => {
      setDataApi(data)
    })
    .catch(error => console.log(error))
  }, [])
  

  return (
    <div className='divPadreDataList'>
      <h3>LISTA DE PRODUCTOS</h3>
      <hr />
      <ul>
        {dataApi.map((item) => (
          <li key={item.id}>
            <p>Nombre: {item.nombre}</p>
            <p>Categoría: {item.categoria}</p>
            <p>Precio: {item.precio}</p>
            <p>Stock: {item.stock}</p>
            <p>Descripción: {item.descripcion}</p>
            <div className='botonImagen'>
            <p>Imagen:</p>
            <a href={item.urlImg} target="_blank" rel="noopener noreferrer" className="image-link-button">Ver imagen</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default dataList;