import React from 'react';
import '../registroUsuario/UserRegister.css'

const UserRegister = () => {
  return (
    <div className='containerRegisterGral'>
      <div className='containerForm'>
				<form>
					<div className='boxTitleRegister'>
						<h4>Escriba sus datos.</h4>
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su email:</label>
						<input className='campo' type="email" maxLength={50}/>
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su contraseña:</label>
						<input className='campo' type="password" maxLength={30} />
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su foto:</label>
						<input className='campo' type="text" />
					</div>
					<input className='btnInputReg' type="submit" />
				</form>
			</div>
    </div>
  )
}

export default UserRegister