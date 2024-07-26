import React from 'react'
import CardPlantas from '../Card/CardPlantas';
import CardMacetas from '../Card/CardMacetas'
import { useSelector} from 'react-redux';

import Tablero from './Tablero';

const Catalogo = () => {

  const catalogo = useSelector((state)=> state.catalogo)


  return (
    <div className="my-[6rem] text-center">
      <h1 className="text-5xl	font-bold text-center mb-16 ">CATALOGO</h1> 
      <div className="flex columns-2 ">
        
        {/* Tablero */}
        <div className="w-[50%] md:w-[30%] lg:w-[30%] xl:w-[25%]">
          <div className='sticky top-36 h-[35rem]'>
            <h1 className="mb-10 text-3xl md:text-4xl lg:text-4xl text-white font-bold">PRESUPUESTO</h1>
            <Tablero/>
          </div >
        </div>

        <div className="w-[50%] sm:w-[70%] flex flex-col justify-center	">
          {/* Plantas */}
          <div>
            <h1 className="mt-16 text-3xl md:text-4xl lg:text-4xl text-white font-bold">PLANTAS</h1>
            <div className='flex flex-row justify-center	flex-wrap'>
              {catalogo.plantas.map((planta, index) => (
              <div key={index} className="">
                <CardPlantas {...planta} />
              </div>
              ))}
            </div>
          </div>

          {/* Macetas */}
          <div >    
            <h1 className="mb-6 mt-6 text-3xl md:text-4xl lg:text-4xl text-white font-bold">MACETAS</h1>
            <div className='flex flex-row justify-center	flex-wrap  '>
              {catalogo.macetas.map((maceta, index) => (
              <div key={index} className="">
                <CardMacetas {...maceta} />
              </div>
              ))}
            </div>
          </div>        
          
          {/* Varios */}
          {/* <div>
            <h1 className="mt-16 text-3xl md:text-4xl lg:text-4xl text-white font-bold">VARIOS</h1>
            <div className='flex flex-row justify-center	flex-wrap'>
              {catalogo.varios.map((vario, index) => (
              <div key={index} className="">
                <CardPlantas {...vario} />
              </div>
              ))}
            </div>
          </div> */}

        </div> 
      </div>
    </div>       
  )
}

export default Catalogo;
