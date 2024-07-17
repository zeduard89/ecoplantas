import React from 'react';
import { useState, useEffect, useRef } from 'react';
import hojaCiclo from "../Utils/NavBarPics/hojasCiclo.png";

function NavBar({ onScroll }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Agregar el listener de resize cuando el componente se monta
    window.addEventListener('resize', handleResize);
    return () => {
      // Remover el listener de resize cuando el componente se desmonta
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseLeave = (event) => {
      // Cierra el menú si el mouse sale del área del menú y no está sobre el botón
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.relatedTarget) &&
        !buttonRef.current.contains(event.relatedTarget)
      ) {
        closeMenu();
      }
    };

    // Agregar el listener de mouseleave cuando el componente se monta
    document.addEventListener('mouseout', handleMouseLeave);
    return () => {
      // Remover el listener de mouseleave cuando el componente se desmonta
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isMenuOpen]);

  return (
    <nav className=' animate-slideDown bg-navBarColor/[.5] w-full fixed flex flex-row justify-between h-[3.3rem] top-0 z-10'>
      <button
        ref={buttonRef}
        data-collapse-toggle="navbar-hamburger"
        type="button"
        className="sm:hidden inline-flex items-center justify-center p-2 w-10 h-9 ml-3 mt-2 mb-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded={isMenuOpen}
        onClick={handleMenuToggle}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } flex items-center justify-between ml-[-1.5rem] mt-[7.5rem] sm:ml-0 sm:mt-0 sm:flex w-full`}
        id="navbar-hamburger"
      >
        <a className='hidden sm:flex items-center' href="https://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiskqnWpa2HAxXBq5UCHeZyB_MQPAgIhttps://www.google.com/webhp?hl=es-419&sa=X&ved=0ahUKEwiskqnWpa2HAxXBq5UCHeZyB_MQPAgI">
          <img className="h-[2.2rem] w-[2.2rem] m-[1rem] rounded-lg" src={hojaCiclo} alt="cv" />
          <h1 className='hidden md:block text-2xl'>Eco Plantas</h1>
        </a>

        <ul className="bg-slate-800 divide-gray-100 sm:bg-transparent flex flex-col sm:flex-row text-center justify-center rounded-md border-2 sm:border-none border-slate-300">
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md'>
            <button
              className='btnNav text-[1rem] sm:text-lg lg:text-xl sm:w-30 w-24 h-8 sm:hover:text-blue-700'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
                onScroll('aboutMe'); // Luego, llama a la función onScroll con el parámetro 'about-me'
              }}
            >
              Inicio
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md'>
            <button
              className='btnNav text-white text-[1rem] sm:text-lg lg:text-xl sm:w-30 w-24 h-8 sm:hover:text-blue-700'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
                onScroll('projects'); // Luego, llama a la función onScroll con el parámetro 'projects'
              }}
            >
              Servicios
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md'>
            <button
              className='btnNav text-white text-[1rem] sm:text-lg lg:text-xl sm:w-40 w-24 h-8 sm:hover:text-blue-700'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
                onScroll('skills'); // Luego, llama a la función onScroll con el parámetro 'skills'
              }}
            >
              Quiénes Somos
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md'>
            <button
              className='btnNav text-white text-[1rem] sm:text-lg lg:text-xl sm:w-30 w-24 h-8 sm:hover:text-blue-700'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
                onScroll('catalog'); // Luego, llama a la función onScroll con el parámetro 'catalog'
              }}
            >
              Catálogo
            </button>
          </li>
          <li className='hover:bg-gray-500 sm:hover:bg-transparent w-full rounded-md'>
            <button
              className='btnNav text-white text-[1rem] sm:text-lg lg:text-xl sm:w-30 w-24 h-8 sm:hover:text-blue-700 mr-1'
              onClick={() => {
                closeMenu(); // Primero, llama a la función closeMenu
                onScroll('contact'); // Luego, llama a la función onScroll con el parámetro 'contact'
              }}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;