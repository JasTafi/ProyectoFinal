import React from 'react'

import { CardProduct } from '../tarjetasDeProductos/CardProduct'

import '../grillaDeProductos/ProductGrid.css'

export const ProductGrid = () => {
  return (
    <div className='gridContainer'>
      <CardProduct/>
    </div>
  )
}
