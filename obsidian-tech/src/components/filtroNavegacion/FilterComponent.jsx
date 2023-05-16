import React, {useState, useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import '../filtroNavegacion/FilterComponent.css'

const FilterComponent = ({show}) => {

const [data, setData] = useState([])

const [filter, setFilter] = useState({
    id: "",
    name: "",
})

function filterCharacters(data) {
    return data.filter((character) => {})
}


  return (
    <form className={show ? 'invisible' : 'navbar-form'}>
        <div>
        <button className='search-button'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <input className='input-navbar' type="text" placeholder='Buscar productos...'/>
        </div>
    </form>
  )
}

export default FilterComponent