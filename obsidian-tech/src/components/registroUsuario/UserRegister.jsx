import React, { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

import { ModalAviso } from '../modalAviso/ModalAviso';

import { CreateUser } from '../../services/user_service';

import '../registroUsuario/UserRegister.css';


const UserRegister = () => {//FALTA VALIDAR CAMPO DE IMAGEN

	//muestra modal de aviso de registro
	const [ show, setShow ] = useState(false)
	//muestra aviso de error en inputs
	const [ showAlert, setShowAlert ] = useState(false)
	//para redireccionar 
	const [ redirect, setRedirect ] = useState(false)

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
			setRedirect(true)
		}, 2000);
	};

	function mostrarAviso(){
		setShowAlert(true)
		setTimeout(() => {
			setShowAlert(false)
		}, 2000);
	};
	const validateEmail = (emailValue) => {
    // Expresión regular para validar el email y otro comentario
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
			mostrarAviso()
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
			mostrarAviso();
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
		.then(res => {
			console.log(res)
			setUser({
				email:"",
				password:"",
				photoUrl:""
			})
		})
		.catch(err => console.log(err))
		.finally(() => {
			mostrarModal();
		})
		
	}
  return (
    <div className='containerRegisterGral'>
			<ModalAviso show={show}/>
      <div className='containerForm'>
				<form>
					<div className='boxTitleRegister'>
						<h4>Registro de usuario.</h4>
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su email:</label>
						<input className='campo' type="email" name='email' value={user.email} maxLength={30} onChange={(e)=> setUser({
							...user,
							email: e.target.value
						})}/>
						<div className={ showAlert?'alertaError':'alertaError desactive'}>{userError.emailError}</div>
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su contraseña:</label>
						<input className='campo' type="password" name='password' value={user.password} maxLength={20} onChange={(e)=> setUser({
							...user,
							password: e.target.value
						})}/>
						<div className={ showAlert?'alertaError':'alertaError desactive'}>{userError.passwordError}</div>
					</div>
					<div className='boxInput'>
						<label htmlFor="">Ingrese su foto:</label>
						<input className='campo' type="text" name='photoUrl' value={user.photoUrl} onChange={(e)=> setUser({
							...user,
							photoUrl: e.target.value
						})}/>
					</div>
					<input className='btnInputReg' type="submit" onClick={(e) => handleRegister(e)}/>
				</form>
			</div>
		{
			redirect && (<Navigate to={"/"}></Navigate>)
		}
    </div>
  )
}

export default UserRegister