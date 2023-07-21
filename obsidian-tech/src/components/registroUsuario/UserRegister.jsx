import React, { useState } from 'react';

import { ModalAviso } from '../modalAviso/ModalAviso';

import { CreateUser } from '../../services/user_service';

import '../registroUsuario/UserRegister.css';


const UserRegister = () => {
	const [ show, setShow ] = useState(false)
	const [user, setUser] = useState({
		email:'',
		password:'',
		photoUrl:''
	});
	//para validar usuario
	const [userError, setUserError] = useState({
		emailError: '',
		passwordError: '',
	})

	function mostrarModal(){
		setShow(true)
		setTimeout(() => {
			setShow(false)
		}, 2000);
	};

	const validateEmail = (emailValue) => {
    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };
	const validatePassword = (passwordValue) => {
		return passwordValue.length >= 6;
	};

	function handleRegister(e){
		e.preventDefault();
		e.stopPropagation()

		if(!validateEmail(user.email)){
			setUserError({
				...userError,
				emailError: "por favor ingresa un email válido"
			})
			return 
		}else{
			setUserError({
				...userError,
				emailError:"",
			})
		};

		if (!validatePassword(user.password)) {
      setUserError({
				...userError,
				passwordError: 'La contraseña debe tener al menos 6 caracteres.'
			});
      return;
    } else {
      setUserError({
				...userError,
				passwordError:""
			});
    }

		CreateUser({
			email: user.email,
			password: user.password,
			urlFoto: user.photoUrl
		})
		.then(res => console.log(res))
		.catch(err => console.log(err))
		.finally(mostrarModal())
	}
  return (
    <div className='containerRegisterGral'>
			<ModalAviso show={show}/>
      <div className='containerForm'>
				<form>
					<div className='boxTitleRegister'>
						<h4>Escriba sus datos.</h4>
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su email:</label>
						<input className='campo' type="email" name='email' maxLength={30} onChange={(e)=> setUser({
							...user,
							email: e.target.value
						})}/>
						{userError.emailError && <div className='alertaError'>{userError.emailError}</div>}
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su contraseña:</label>
						<input className='campo' type="password" name='password' maxLength={20} onChange={(e)=> setUser({
							...user,
							password: e.target.value
						})}/>
						{userError.passwordError && <div className='alertaError'>{userError.passwordError}</div>}
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su foto:</label>
						<input className='campo' type="text" name='photoUrl' onChange={(e)=> setUser({
							...user,
							photoUrl: e.target.value
						})}/>
					</div>
					<input className='btnInputReg' type="submit" onClick={(e) => handleRegister(e)}/>
				</form>
			</div>
    </div>
  )
}

export default UserRegister