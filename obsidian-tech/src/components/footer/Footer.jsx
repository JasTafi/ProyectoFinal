import React from 'react';

import { Link } from 'react-router-dom';

import '../footer/Footer.css';

const Footer = () => {
  return (
    <div className='containerGralFooter'>
        <div className='circulo izq'></div>
        <div className='circulo der'></div>
        <div className='containerFooter'>
            <div className='containerLogFooter'>
                <h2>Obsidian-Tech</h2>
                <p>Tenemos 2 años de experiencia en el rubro de Ventas de Tecnología. Nuestro objetivo es dar lo mejor de nosotros para tus proyectos. Buscamos  fugit labore in!</p>
								<h6>Hecho por alumnos de la comision 28i RollingCode</h6>
            </div>
            <div className='containerLinksFooter'>
                <h4>NAVEGACIÓN:</h4>
                <ul>
                    <Link className='linksFoot' to={"/"}>Home</Link>
                    <Link className='linksFoot' to={"recContraseña"}>Recuperar contraseña </Link>
                    <Link className='linksFoot' to={"nosotros"}>Nosotros </Link>
                    <Link className='linksFoot' to={"favoritos"}>Favoritos </Link>
                </ul>
            </div>
            <div className='containerSocialFooter'>
                <h4>SEGUINOS:</h4>
                <ul>
                    <Link className='linksFoot' to={"https://www.youtube.com/"}>youtube</Link>
										<Link className='linksFoot' to={"https://www.instagram.com/"}>instagram</Link>
										<Link className='linksFoot' to={"https://www.facebook.com/"}>facebook</Link>
										<Link className='linksFoot' to={"error404"}>twitter</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer