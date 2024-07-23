import React from 'react'
import hojaCiclo from "../Utils/NavBarPics/hojasCiclo.png";
import { Link, useNavigate } from 'react-router-dom';
import email from '../Utils/Logos/gmail.png'
import instagram from '../Utils/Logos/instagram.png'
import whatsapp from '../Utils/Logos/whatsapp.png'


import './footer.css'

const Footer = ({ onScroll }) => {
  
  const navigate = useNavigate();
  
  return (
    
  <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      
    <div className="md:h-[2rem] h-[3rem] flex items-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 justify-between">
      <a className='flex items-center' href="https://www.ecoplantas.com.ar/">
          <img className="mr-3 h-4 w-4" src={hojaCiclo} alt="logo" />
          <h1 className='flex items-center font-semibold uppercase'>Eco Plantas</h1>
        </a>
      <div className='flex flew-row items-center'>
          <span className='mr-2'>Mantengos contacto por medio de nuestras Redes:</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" className='h-[1.5rem] mr-2 hover:bg-red-300 border-1 rounded '/> 
          </a>
          <a href="https://wa.me/1134570444" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="whatsapp ico" className='h-[1.5rem] mr-2 hover:bg-lime-500 border-1 rounded-md' />
          </a>
          <a href="mailto:zeduard89@gmail.com">
            <img src={email} alt="email icon" className='h-[1.5rem] mr-2 hover:bg-rose-500 border-1 rounded' />
          </a>
      </div>
    </div>

    {/* <!--Copyright section--> */}
    <div className="bg-neutral-200 p-1 text-center dark:bg-neutral-700">
      <span>© 2024 Copyright:</span>
      <a
        className="font-semibold text-neutral-600 dark:text-neutral-400"
        href="mailto:zeduard89@gmail.com"
      > zEduard89</a>
    </div>
  </footer>
//   <button
//   className='btnNav text-white text-[1rem] sm:text-lg lg:text-xl sm:w-30 w-24 h-8 sm:hover:text-blue-700'
//   onClick={() => {
//     closeMenu(); // Primero, llama a la función closeMenu
//     navigate('/');
//     onScroll('servicios'); // Luego, llama a la función onScroll con el parámetro 'projects'
//   }}
// >


  )
}

export default Footer
