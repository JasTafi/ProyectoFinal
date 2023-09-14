import {useState} from 'react'

import { Link, NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faCircleQuestion, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

import '../navegacion/ObsidianNavbar.css'
import FilterComponent from '../filtroNavegacion/FilterComponent';
//import Favoritos from '../favoritos/Favoritos';
import ModalLogin from '../login/ModalLogin';
import { BuyCar } from '../buycar/BuyCar';

export const ObsidianNavbar = () => {

//useState para menu burger
  const [clicked, setClicked] = useState(false)

  function clickear(){
    setClicked(!clicked)
  }
//useState para boton user
  const [login, setLogin] = useState(false)
//para cambiar de color el navbar
  const [scrolling, setSCrolling] = useState(false)

  function changeBackG() {
    if(window.scrollY >= 10){
      setSCrolling(true);
    }else{
      setSCrolling(false);
    }
  }
  function openedUser(){
    setLogin(!login)
  }

  window.addEventListener("scroll",changeBackG);

  return (
    <>
    <div className='navBarBox'>
      <div className={ scrolling ? 'navBarContainer scroll' : 'navBarContainer'}>
        <h2>Obsidian<span>-</span>Tech</h2>
        <div className={ clicked ? 'linksContainer active': 'linksContainer'}>
          <NavLink className='linkStyle' to={'/'}>Home</NavLink>
          <NavLink className='linkStyle' to={'/administracion'}>Administracion</NavLink>
          <NavLink className='linkStyle' to={'/nosotros'}>Nosotros</NavLink>
          <NavLink className='linkStyle' to={'/recContraseña'}>Recuperar Contraseña</NavLink>
        </div>
        <div className='halfContainer'>
          <div className='iconContainer'>
            <div className='userContainer'>
            <ModalLogin />
            </div>
            <BuyCar/>
            <Link to="/favoritos" className='fav'><FontAwesomeIcon icon={faHeart} /></Link>
            <button><FontAwesomeIcon icon={faCircleQuestion} /></button>
          </div>
          <div className='burger'>
            <button onClick={clickear}><FontAwesomeIcon icon={faBars} /></button>
          </div>
        </div>
        <div className={clicked ? 'inputContainer active':'inputContainer'}>
          <FilterComponent/>
        </div>
      </div>
    </div>
    </>
  )
}
