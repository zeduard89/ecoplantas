import React from 'react'
import CardCatalogo from '../Card/CardCatalogo';
import macetas from './data/Macetas'; // Importa los datos de las macetas
import plantas from './data/Plantas'; // Importa los datos de las macetas
import varios from './data/Varios'; // Importa los datos de las macetas


const Catalogo = () => {
  return (
    <div className="my-[5rem] text-center">
      <h1 className="text-6xl mb-8 md:ml-[20rem] ml-[8rem] ">CATALOGO</h1> 
      <div className="flex columns-2 ">
          
      {/* Tablero */}
      <div className="w-[50%] md:w-[30%] lg:w-[30%] xl:w-[25%]">
        <div className="bg-white m-8 rounded-md h-[30rem] mt-20 sticky top-36">
          TABLERO
        </div>
      </div>

      <div className="w-[50%] sm:w-[70%] flex flex-wrap">
      {/* Macetas */}
      <div >    
        <h1 className="text-4xl">MACETAS</h1>
        <div className='flex flex-row justify-center	flex-wrap  '>
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
            <div className='flex flex-row justify-between	flex-wrap	sm:ml-20	'>
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
            <div className='flex flex-row justify-between	flex-wrap	sm:ml-20	'>
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


// const Catalogo = () => {
//   return (
//     <div className="mt-[5rem] text-center">
//       <h1 className="text-6xl mb-8 md:ml-[20rem] ml-[8rem] ">CATALOGO</h1> 
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          
//       {/* Tablero */}
//       <div className="md:w-[20rem] col-span-1 mt-6">
//         <div className="bg-white m-8 rounded-md h-[30rem] sitcky top-36">
//           TABLERO
//         </div>
//       </div>

//       <div className="md:p-12 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3 ">
//       {/* Macetas */}
//       <div>    
//         <h1 className="text-4xl">MACETAS</h1>
//         <div className='flex flex-row justify-between	flex-wrap'>
//           {macetas.map((maceta, index) => (
//           <div key={index} className="">
//             <CardCatalogo {...maceta} />
//           </div>
//           ))}
//         </div>
//       </div>        
      
//       {/* Varios */}
//       <div>
//             <h1 className="text-4xl">PLANTAS</h1>
//             <div className='flex flex-row justify-between	flex-wrap		'>
//               {plantas.map((planta, index) => (
//               <div key={index} className="">
//                 <CardCatalogo {...planta} />
//               </div>
//               ))}
//             </div>
//           </div>

//           {/* Varios */}
//           <div>
//             <h1 className="text-4xl">VARIOS</h1>
//             <div className='flex flex-row justify-between	flex-wrap		'>
//               {varios.map((vario, index) => (
//                 <div key={index} className="">
//                   <CardCatalogo {...vario} />
//                 </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>  
           
      
           
         
//   )
// }

// export default Catalogo;
