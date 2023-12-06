import React from 'react'
import Favoritos from '../components/favoritos/Favoritos'
import { RutaProtejida } from '../components/RutaProtejida/RutaProtejida'

const FavoritosPage = () => {
  return (
    <RutaProtejida>
      <Favoritos/>
    </RutaProtejida>
  )
}

export default FavoritosPage