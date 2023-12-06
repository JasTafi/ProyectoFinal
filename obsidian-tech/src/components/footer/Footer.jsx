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
                <p>Somos expertos en ventas de tecnología, nos dedicamos a proporcionar lo mejor para los proyectos de nuestros clientes. Activamente buscamos emprendedores interesados en unirse a nuestro proyecto. Contáctanos para más información.</p>
								<h6>Desarrollado por alumnos de la comisión 28i de:</h6>
                
                <div className="logoRolling">
                  <span>{'<'}{'>'}</span>
                </div>

                <a className='linkRolling' href="https://web.rollingcodeschool.com" target="_blank" rel="noopener noreferrer">
                  RollingCode SCHOOL
                </a>
                
                {/* <div className="logoRolling">
                  <span>{'<'}{'>'}</span>
                </div> */}
               
                  {/* <img src="https://web.rollingcodeschool.com/wp-content/uploads/2023/10/RollingCode-Logo-3.svg" target="_blank" rel="noopener noreferrer" /> */}
                                             
            </div>
            {/* <div className='containerLinksFooter'>
                <h4>NAVEGACIÓN:</h4>
                <ul>
                    <Link className='linksFoot' to={"/"}>Home</Link>
                    <Link className='linksFoot' to={"recContraseña"}>Recuperar contraseña </Link>
                    <Link className='linksFoot' to={"nosotros"}>Nosotros </Link>
                    <Link className='linksFoot' to={"favoritos"}>Favoritos </Link>
                </ul>
            </div> */}
            <div className='containerContactos'>
                <h4>CONTACTO:</h4>
                <ul>
                     <li class="fas fa-home me-3"></li>General Paz 576, Piso 8, oficina 2
                     <li class="fas fa-home me-3"></li>San Miguel de Tucumán, Argentina
                     <li class="fas fa-envelope me-3"></li>info@Obsidian-Tech.com.ar 
                     <li class="fas fa-phone me-3"></li> +54 381 606-4103 
                </ul>
                <p>Copyright &copy; 2023 Obsidian-Tech. Todos los derechos reservados</p>
            </div>

            <div className='containerSocialFooter'>
                <h4>SEGUINOS:</h4>
                <ul>
                    <Link className='linksFoot' to={"https://www.youtube.com/"}>Youtube</Link>
										<Link className='linksFoot' to={"https://www.instagram.com/"}>Instagram</Link>
										<Link className='linksFoot' to={"https://www.facebook.com/"}>Facebook</Link>
										<Link className='linksFoot' to={"error404"}>Twitter</Link>
                </ul>
           </div>
        </div>
    </div>
  )
}

export default Footer