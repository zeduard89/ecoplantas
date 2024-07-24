import React from 'react'
import CardCatalogo from '../Card/CardCatalogo';
import { useSelector} from 'react-redux';

import Tablero from './Tablero';

const Catalogo = () => {


    

  const catalogo = useSelector((state)=> state.catalogo)


  return (
    <div className="my-[6rem] text-center">
      <h1 className="text-5xl	font-bold text-center mb-8 ">CATALOGO</h1> 
      <div className="flex columns-2 ">
        
        {/* Tablero */}
        <div className="w-[50%] md:w-[30%] lg:w-[30%] xl:w-[25%]">
          <div className='sticky top-36 h-[35rem]'>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">PRESUPUESTO</h1>
            <Tablero/>
          </div >
        </div>

        <div className="w-[50%] sm:w-[70%] flex flex-col justify-center	">
          {/* Macetas */}
          <div >    
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">MACETAS</h1>
            <div className='flex flex-row justify-center	flex-wrap  '>
              {catalogo.macetas.map((maceta, index) => (
              <div key={index} className="">
                <CardCatalogo {...maceta} />
              </div>
              ))}
            </div>
          </div>        
          
          {/* Varios */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">PLANTAS</h1>
            <div className='flex flex-row justify-center	flex-wrap'>
              {catalogo.plantas.map((planta, index) => (
              <div key={index} className="">
                <CardCatalogo {...planta} />
              </div>
              ))}
            </div>
          </div>

          {/* Varios */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">VARIOS</h1>
            <div className='flex flex-row justify-center	flex-wrap'>
              {catalogo.varios.map((vario, index) => (
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

// import React from 'react'
// import CardCatalogo from '../Card/CardCatalogo';
// import macetas from './data/Macetas'; // Importa los datos de las macetas
// import plantas from './data/Plantas'; // Importa los datos de las macetas
// import varios from './data/Varios'; // Importa los datos de las macetas
// import tablero from './Tablero'
// import Tablero from './Tablero';

// const Catalogo = () => {
//   return (
//     <div className="my-[6rem] text-center">
//       <h1 className="text-5xl	font-bold text-center mb-8 ">CATALOGO</h1> 
//       <div className="flex columns-2 ">
          
//       {/* Tablero */}
//       <div className="w-[50%] md:w-[30%] lg:w-[30%] xl:w-[25%]">
//         <div className='sticky top-36 h-[35rem]'>
//           <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">PRESUPUESTO</h1>
//           <Tablero/>
//         </div >
//       </div>

//       <div className="w-[50%] sm:w-[70%] flex flex-wrap">
//       {/* Macetas */}
//       <div >    
//         <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">MACETAS</h1>
//         <div className='flex flex-row justify-center	flex-wrap  '>
//           {macetas.map((maceta, index) => (
//           <div key={index} className="">
//             <CardCatalogo {...maceta} />
//           </div>
//           ))}
//         </div>
//       </div>        
      
//       {/* Varios */}
//       <div>
//             <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">PLANTAS</h1>
//             <div className='flex flex-row justify-center	flex-wrap'>
//               {plantas.map((planta, index) => (
//               <div key={index} className="">
//                 <CardCatalogo {...planta} />
//               </div>
//               ))}
//             </div>
//           </div>

//           {/* Varios */}
//           <div>
//             <h1 className="text-3xl md:text-4xl lg:text-4xl text-white font-bold">VARIOS</h1>
//             <div className='flex flex-row justify-center	flex-wrap'>
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
