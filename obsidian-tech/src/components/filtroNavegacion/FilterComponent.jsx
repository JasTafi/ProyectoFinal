import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../filtroNavegacion/FilterComponent.css'

const FilterComponent = ({show}) => {

  const [dataApi, setDataApi] = useState([])
  const [filtered, setFiltered] = useState('')
  const [resultado, setResultado] = useState([])

  async function GetDataAllCharacters() {
    const resultado = await fetch('https://rickandmortyapi.com/api/character?limit=846')
    return await resultado.json()
  }

  const filtrado = (valorDelInput) => {
    const resultadoBusqueda = dataApi.filter((item) => {
      if(item.name.toLowerCase().includes(valorDelInput.toLowerCase())){
        return item
      }
    })
    setResultado(resultadoBusqueda)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    setFiltered(inputValue)
    filtrado(inputValue)
  }

  useEffect(() => {
    GetDataAllCharacters()
    .then(({results}) => {
      setDataApi(results)
    })
    .catch(error => console.log(error))
  }, [])

  const showResults = resultado.length > 0 && filtered !== ''

  return (
    <>
    <form className={show ? 'invisible' : 'navbar-form'}>
        <div className='boxInput'>
        <button className='search-button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <input className='input-navbar' 
        onChange={handleChange}
        value={filtered}
        type="text" 
        placeholder='Buscar productos...'/>
        </div>
    </form>
    {
      showResults && (
        <div className='containerShowResults'>
          <div className='containerResults'>
          {
            resultado.map((item,index) => {
              return (
                <div className='cardResults'key={index}>
                  <img src={item.image} />
                  <p>{item.name}</p>
                </div>
              )
            })
          }
          <div className='btnGeneral'>{resultado.length} Resultados</div>
          </div>
        </div>
      )
    }
    </>
  )
}

export default FilterComponent