import React from 'react'
import '../modalAviso/ModalAviso.css';

export const ModalAviso = ({show}) => {
	
  return (
    <div className={ show ? 'containerModalgral active': 'containerModalgral'}>
			<div className='containerModalEx'>
				<h6>Usuario registrado con exito!</h6>
			</div>
		</div>
  )
}
