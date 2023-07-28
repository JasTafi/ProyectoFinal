import {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../filtroNavegacion/FilterComponent.css'
import { ContainerResults } from '../ventanadaResultados/ContainerResults'
import { getAllProductsFromDB } from '../../services/product_service'

const FilterComponent = ( {setClicked} ) => {

  const [dataApi, setDataApi] = useState([])
  const [filtered, setFiltered] = useState('')
  const [resultado, setResultado] = useState([])
  //para mostrar ventana de resultados
  const [ show, setShow] = useState(false);

  const filtrado = (valorDelInput) => {
    const resultadoBusqueda = dataApi.filter((item) => {
      if(item.nombre.toLowerCase().includes(valorDelInput.toLowerCase())){
        return item
      }
    })
    setResultado(resultadoBusqueda)
    setShow(true)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    setFiltered(inputValue)
    filtrado(inputValue)
  }

  useEffect(() => {
    getAllProductsFromDB()
    .then(({ data }) => {
      setDataApi(data);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <>
    <form className='navbar-form'>
        <div className='boxInput'>
        <button className='search-button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <input className='input-navbar' 
        onChange={handleChange}
        value={filtered}
        type="text" 
        maxLength={30}
        placeholder='Buscar productos...'/>
        </div>
    </form>
    <ContainerResults resultado = {resultado} show = {show} setShow={setShow} setFiltered={setFiltered} setClicked={setClicked}/>
    </>
  );
};

export default FilterComponent