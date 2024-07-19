import React from 'react'
import CardCatalogo from '../Card/CardCatalogo';
import macetas from './data/Macetas'; // Importa los datos de las macetas
import plantas from './data/Plantas'; // Importa los datos de las macetas
import varios from './data/Varios'; // Importa los datos de las macetas


const Catalogo = () => {
  return (
    <div className="">
      <div className="w-full h-full mt-[8rem] text-center">
        <h1 className="text-6xl mb-8 md:ml-[20rem] ml-[8rem] ">CATALOGO</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
            
            <div className=" col-span-1">
              <div className="bg-white m-8 rounded-md h-[30rem]">
                TABLERO
              </div>
            </div>

            
              {/* Macetas */}
              <div className="">
                
                <h1 className="text-4xl">MACETAS</h1>
                <div className='flex flex-row justify-between	flex-wrap		'>
                  {macetas.map((maceta, index) => (
                    <div key={index} className="">
                      <CardCatalogo {...maceta} />
                    </div>
                  ))}
                </div>
              </div>

                {/* Varios */}
                <div>
                  <h1 className="text-4xl">PLANTAS</h1>
                  <div className='flex flex-row justify-between	flex-wrap		'>
                    {plantas.map((planta, index) => (
                      <div key={index} className="">
                        <CardCatalogo {...planta} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Varios */}
                <div>
                  <h1 className="text-4xl">VARIOS</h1>
                  <div className='flex flex-row justify-between	flex-wrap		'>
                    {varios.map((vario, index) => (
                      <div key={index} className="">
                        <CardCatalogo {...vario} />
                      </div>
                    ))}
                  </div>
                </div>
            
          
            
            


        </div>
        


      </div>
    </div>
  )
}

export default Catalogo;
