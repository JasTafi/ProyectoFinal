import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faCircleQuestion, faHeart, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import FilterComponent from '../filtroNavegacion/FilterComponent';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../navegacion/ObsidianNavbar.css'


export const ObsidianNavbar = () => {
//contador de carrito y wishlist
const [item, setItem] = useState(0)

// const [mostrar, setMostrar] = useState(false)

function addItem() {
  setItem( item + 1)
}
//cambio de color y ocultar input scroll nav
const [show, setShow] = useState(false)

const [mostrar, setMostrar] = useState(false)

function mostrarDiv() {
  setMostrar(!mostrar)
}
function changeColorAndSearch () {
    if(window.scrollY > 0){
        setShow(true)
    }else{
        setShow(false)
    }
}
window.addEventListener('scroll', changeColorAndSearch)

  return (
    <Navbar sticky="top" className='navbar-container' expand="lg">
      <Container fluid className='containerFluid'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className={show ? 'nav-flex-column navbar-scroll-color':'nav-flex-column'}>
            <Nav
              className="navbar-links"
              navbarScroll
            >
              <div className='group-links'>
              <NavLink className='navLink'>Destacados</NavLink>
              <NavLink href="#" className='navLink'>Contacto</NavLink>
              </div>
              <NavLink className='brandLink' to={'/'}>Obsidian<span>-</span>Tech</NavLink>
              <div className='group-links'>
              <div className='boxUser'>
                <button onClick={mostrarDiv} className='buttonIcon'><FontAwesomeIcon icon={faUser} /></button>
                <div className={ mostrar ? 'boxLoginRegister visible':'boxLoginRegister'}>
                  <p>login</p>
                  <p>register</p>
                </div>
              </div>
              <div className='boxIcon'>
                  <button className='buttonIcon'><FontAwesomeIcon icon={faCartShopping} /></button>
                  <div className='contador'>{item}</div>
              </div>
              <div className='boxIcon'>
                  <button className='buttonIcon'><FontAwesomeIcon icon={faHeart} /></button>
                  <div className='contador'>{item}</div>
              </div>
              <button className='buttonIcon'><FontAwesomeIcon icon={faCircleQuestion} /></button>
              </div>
            </Nav>
            <FilterComponent show = {show}/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}