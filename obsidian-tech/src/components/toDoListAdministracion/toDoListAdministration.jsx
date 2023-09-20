import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

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
  
      <Accordion defaultActiveKey="0">
<Accordion.Item eventKey="1">
<Accordion.Header>Teclados</Accordion.Header>
<Accordion.Body>

        
          
        
        <ul>
        {dataApi.map((item) => (

            <Accordion className='accordion'  defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header className='accordion'>{item.nombre}</Accordion.Header>
                <Accordion.Body className='accordion'>
                  <li key={item.id}>
                    <div className='divProducto'>
                      <h4>Nombre:</h4>
                      <p>{item.nombre}</p>
                    </div>
                    <div className='divProducto'>
                      <h4>Categoría:</h4>
                      <p>{item.categoria}</p>
                    </div>
                    <div className='divProducto'>
                      <h4>Precio:</h4>
                      <p>${item.precio}</p>
                    </div>
                    <div className='divProducto'>
                    <h4>Stock:</h4>
                    <p>{item.stock} u.</p>
                  </div>
                    <div className='divProducto'>
                      <h4>Descripcion:</h4>
                    <p>{item.Descripcion}</p>
                  </div>
                    <div className='botonImagen'>
                      <h4>Imagen:</h4>
                      <a href={item.urlImg} target="_blank" rel="noopener noreferrer" className="image-link-button">Ver imagen</a>
                    </div>
                  </li>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
                    ))}
        </ul>
        
</Accordion.Body>
</Accordion.Item>
</Accordion>
      <hr />
      <ul>
        {dataApi.map((item) => (

<hr />
    // <Accordion className='accordion'  defaultActiveKey="0">
    //   <Accordion.Item eventKey="1">
    //     <Accordion.Header className='accordion'>{item.nombre}</Accordion.Header>
    //     <Accordion.Body className='accordion'>
    //       <li key={item.id}>
    //         <div className='divProducto'>
    //           <h4>Nombre:</h4>
    //           <p>{item.nombre}</p>
    //         </div>
    //         <div className='divProducto'>
    //           <h4>Categoría:</h4>
    //           <p>{item.categoria}</p>
    //         </div>
    //         <div className='divProducto'>
    //           <h4>Precio:</h4>
    //           <p>${item.precio}</p>
    //         </div>
    //         <div className='divProducto'>
    //           <h4>Stock:</h4>
    //           <p>{item.stock} u.</p>
    //         </div>
    //         <div className='divProducto'>
    //           <h4>Descripcion:</h4>
    //           <p>{item.Descripcion}</p>
    //         </div>
    //         <div className='botonImagen'>
    //           <h4>Imagen:</h4>
    //           <a href={item.urlImg} target="_blank" rel="noopener noreferrer" className="image-link-button">Ver imagen</a>
    //         </div>
    //       </li>
    //     </Accordion.Body>
    //   </Accordion.Item>
    // </Accordion>
            ))}
            </ul>
            
          </div>
  )
}

export default dataList;