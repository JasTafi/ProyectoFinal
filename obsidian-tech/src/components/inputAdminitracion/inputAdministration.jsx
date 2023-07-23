import React, { useState, useEffect } from 'react';

import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';

import { getProductByIdFromDb } from '../../services/api';
import '../inputAdminitracion/inputAdministration.css';



const InputComponent = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      categoria: '',
      precio: '',
      stock: '',
      descripcion: '',
      urlImg: ''
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      // aqui en teoria rodri se va a guardar los datos en la base de datos (en teoria jaja)
      fetch('/api/save-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Datos guardados en la base de datos:', data);
          setFormData({
            nombre: '',
            categoria: '',
            precio: '',
            stock: '',
            descripcion: '',
            urlImg: ''
          });
        })
        .catch(error => {
          alert("Error al guardar los datos en la base de datos")
          console.error('Error al guardar los datos en la base de datos:', error);
        });
    };
  
    return (
      <div className='divPadreInput'>
        <div className='divHijoInput'>
          <h3>AGREGAR PRODUCTO</h3>
          <hr></hr>
          <p>Ingrese los productos a la lista de stock</p>
          <form className='formInput' onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Nombre"
            />
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleInputChange}
              placeholder="Categoría"
            />
            <input
              type="text"
              name="precio"
              value={formData.precio}
              onChange={handleInputChange}
              placeholder="Precio"
            />
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="Stock"
            />
            <input
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Descripción"
            />
            <input
              type="text"
              name="imagen"
              value={formData.urlImg}
              onChange={handleInputChange}
              placeholder="URL de la imagen"
            />
  
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default InputComponent;
  