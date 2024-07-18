import React from 'react'
import Carrousel from './Carrousel';
import Card from '../Card/Card';
import  {banner2}  from '../Utils/Cloudinary/Cloudinary';


const Home = () => {

  return (
    <div>
      
      {/* Carrusel */}
      <div className=' border-b-2 border-green-700	'>
        <Carrousel/>
        <div className='bg-black/[.2] z-40 h-[40rem] w-full absolute inset-0 flex flex-col items-center justify-center  text-white'>
          <h1 className='text-center text-7xl font-bold mb-2'>Eco Plantas</h1>
          <h2 className='text-center text-3xl'>Alquiler de plantas para eventos.</h2>
        </div>
      </div>

      {/* Card */}
      <div className="w-full mt-5 text-center">
        <div className='p-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className="col-span-1">
            <h1 className=" mb-8 text-3xl xl:text-5xl	font-bold	">ALQUILER DE FLORES Y PLANTAS PARA EVENTOS</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rerum alias illo ad necessitatibus, perferendis pariatur labore minus sed aspernatur mollitia, nisi, dolores veniam ullam vel dolor voluptate consequuntur nihil!</h3>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat facilis nesciunt ullam obcaecati recusandae dolore adipisci quidem a ab fuga numquam, illum repellat pariatur cupiditate blanditiis asperiores reprehenderit. Placeat, doloremque.</h3>
          </div>
          <div className="col-span-1  ">
            <Card image={banner2}/>
          </div>
        </div>
      </div>

      <div className="border-b-2 w-[95%] mx-auto m-5	"></div>

      {/* Services */}
      <div id="servicios" className= "m-[3rem] text-center flex flex-col items-center">
      <h2 className='text-center text-4xl mb-8 font-bold'>Nuestros Servicios.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-start justify-center">
          <div className="col-span-1 flex flex-col items-center">
            <Card image={banner2} />
            <h1 className="m-5 text-2xl">Alquiler de Macetas</h1>
            <h3 className="text-center">
              Ofrecemos una amplia variedad de macetas para alquiler, ideales para decorar cualquier espacio. 
              Desde macetas pequeñas para interiores hasta grandes jardineras para exteriores.
            </h3>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Card image={banner2} />
            <h1 className="m-5 text-2xl">Alquiler de Plantas</h1>
            <h3 className="text-center">
              Disponemos de plantas de todos los tamaños y tipos, perfectas para eventos, oficinas y hogares.
              Nuestros expertos en jardinería aseguran que cada planta esté en perfectas condiciones.
            </h3>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <Card image={banner2} />
            <h1 className="m-5 text-2xl">Mantenimiento y Cuidado</h1>
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
