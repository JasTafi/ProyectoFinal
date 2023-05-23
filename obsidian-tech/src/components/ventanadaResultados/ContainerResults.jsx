import React, { useState } from 'react'

import '../ventanadaResultados/ContainerResults.css'

export const ContainerResults = ({resultado, filtered}) => {

  const showResults = resultado.length > 0 && filtered !== ''
  
  return (
    <>
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
