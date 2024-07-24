import React, { useEffect, useCallback } from 'react';
//Update catalogo
import { useDispatch } from "react-redux";
import obtenerDatosPosts from '../../redux/wordPressApi'
import { addCatalogo } from '../../redux/catalogoSlice';
//Components
import Carrousel from './Carrousel';
import Card from '../Card/Card';

//Images
import images from '../Utils/imges/cards/imageLoader'


const Home = () => {

  //get catalogo from  wordpress y update redux
  const dispatch = useDispatch();


  const fetchPosts = useCallback(async () => {
    try {
      const datosPosts = await obtenerDatosPosts();
      dispatch(addCatalogo(datosPosts));
    } catch (err) {
      console.log("error",err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);




  return (
    <div>
      
      {/* Carrusel */}
      <div className=' border-b-2	'>
        <Carrousel/>
        <div className='bg-black/[.2] z-40 h-[40rem] w-full absolute inset-0 flex flex-col items-center justify-center  text-white'>
          <h1 className='text-center text-white text-7xl font-bold mb-2'>Eco Plantas</h1>
          <h2 className='text-center text-white text-3xl'>Alquiler de plantas para eventos.</h2>
        </div>
      </div>

      {/* Card */}
      <div className="w-full mt-5 text-center">
        <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className="col-span-1">
            <h1 className=" mb-8  text-3xl xl:text-5xl	font-bold	">ALQUILER DE FLORES Y PLANTAS PARA EVENTOS</h1>
            <h3 className='mb-3'>
              En Eco Plantas, nos especializamos en proporcionar una experiencia única a través del alquiler de flores y plantas para todo tipo de eventos. Desde bodas elegantes hasta celebraciones corporativas, nuestras decoraciones verdes añadirán un toque fresco y vibrante a tu ocasión especial.<br/><br/>
              Nuestro compromiso con la calidad y la atención al detalle asegura que cada planta y arreglo floral esté cuidadosamente seleccionado para realzar la estética de tu evento. Permítenos transformar tu espacio en un entorno mágico y lleno de vida.
            </h3>
          </div>
          <div className="col-span-1  flex justify-center">
            <Card image={images.team}/>
          </div>
        </div>
      </div>

      <div className="border-b-2 w-[95%] mx-auto m-5	"></div>



      {/* Services */}
      <div id="servicios" className= "m-[3rem] text-center flex flex-col items-center">
      <h1 className='text-center text-4xl mb-8 font-bold'>Nuestros Servicios.</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-start justify-center">
          <div className="col-span-1 flex flex-col items-center mb-3">
            <Card image={images.macetas} />
            <h1 className="m-5 text-2xl font-semibold">Venta de Macetas</h1>
            <h3 className="text-center">
              Ofrecemos una amplia variedad de macetas, ideales para decorar cualquier espacio. 
              Desde macetas pequeñas para interiores hasta grandes jardineras para exteriores.
            </h3>
          </div>
          <div className="col-span-1 flex flex-col items-center mb-6">
            <Card image={images.plantas} />
            <h1 className="m-5 text-2xl font-semibold">Alquiler de Plantas</h1>
            <h3 className="text-center ">
              Disponemos de plantas de todos los tamaños y tipos, perfectas para eventos, oficinas y hogares.
              Nuestros expertos en jardinería aseguran que cada planta esté en perfectas condiciones.
            </h3>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Card image={images.mantenimiento} />
            <h1 className="m-5 text-2xl font-semibold">Mantenimiento y Cuidado</h1>
            <h3 className="text-center">
              Además del alquiler, ofrecemos servicios de mantenimiento y cuidado de plantas. 
              Nos encargamos de regar, podar y fertilizar para que siempre luzcan saludables y hermosas.
            </h3>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
