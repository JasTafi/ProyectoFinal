
import { Link } from 'react-router-dom';

import '../ventanadaResultados/ContainerResults.css'

export const ContainerResults = ({resultado, show, setShow, setFiltered, setClicked}) => {

  return (
    <>
      <div className={show ?'containerShowResults active': 'containerShowResults'}>
            <div className='containerResults'>
              {
                resultado.map((item) => {
                  return (
                    <div className='cardResults'key={item._id}>
                      <img className='imgDetalle' src={item.urlImg} />
                      <Link to={`/accesorio/${item._id}`} className='linkAccesorio' onClick={() => {
                        setShow(false);
                        setFiltered("");
                        setClicked(false)
                      }}>
                      <div className='nombreYPrecio'>
                        <p>{item.nombre}</p>
                        <p>${item.precio}</p>
                      </div>
                      </Link>
                    </div>
                  )
                })
              }
              <div className='btnGeneral'>{resultado.length} Resultados</div>
          </div>
        </div>
    </>
  )
}
