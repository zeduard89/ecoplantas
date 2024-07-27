import React, { useState } from 'react';
import CardPlantas from '../Card/CardPlantas';
import CardMacetas from '../Card/CardMacetas';
import { useSelector } from 'react-redux';
import medCuad from '../Utils/imges/macetas/medidasCuadradas.jpg';
import medRec from '../Utils/imges/macetas/medidasRectangulares.jpg';
import Tablero from './Tablero';

const Catalogo = () => {
  const catalogo = useSelector((state) => state.catalogo);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedImage(null);
    }
  };

  return (
    <div className="my-[6rem] text-center">
      <h1 className="text-5xl font-bold text-center mb-16">CATALOGO</h1>
      <div className="flex columns-2">
        {/* Tablero */}
        <div className=" w-[50%] md:w-[30%] lg:w-[30%] xl:w-[20%]">
          <div className="sticky top-36 md:h-[35rem] lg:h-[35rem] mb-8 sm:mb-0">
            <h1 className="mb-10 text-2xl md:text-4xl lg:text-4xl text-white font-bold">
              PRESUPUESTO
            </h1>
            <Tablero />
          </div>
        </div>

        <div className="w-[50%] sm:w-[70%] flex flex-col justify-center">
          {/* Plantas */}
          <div>
            <h1 className=" text-3xl md:text-4xl lg:text-4xl text-white font-bold">
              PLANTAS
            </h1>
            <div className="flex flex-row justify-center flex-wrap">
              {catalogo.plantas.map((planta, index) => (
                <div key={index}>
                  <CardPlantas {...planta} />
                </div>
              ))}
            </div>
          </div>

          {/* Macetas */}
          <div>
            <h1 className="mb-6 mt-6 text-3xl md:text-4xl lg:text-4xl text-white font-bold">
              MACETAS
            </h1>
            <div className="flex flex-row justify-center flex-wrap">
              {catalogo.macetas.map((maceta, index) => (
                <div key={index}>
                  <CardMacetas {...maceta} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row justify-center flex-wrap">
            <img
              src={medRec}
              alt="Medidas Rectangulares"
              className="rounded-md m-8 ml-6 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem] cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => handleImageClick('medRec')}
            />
            <img
              src={medCuad}
              alt="Medidas Cuadradas"
              className="rounded-md m-8 ml-6 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem] cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => handleImageClick('medCuad')}
            />
          </div>
        </div>
      </div>

      {/* Overlay for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
          onClick={handleOverlayClick}
        >
          <div className="relative flex flex-col items-center gap-8">
            <button
              className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-70 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage === 'medRec' ? medRec : medCuad}
              alt={selectedImage === 'medRec' ? "Medidas Rectangulares" : "Medidas Cuadradas"}
              className="rounded-md h-[80%] max-w-[90%] transition-transform duration-300 transform scale-105"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;



// import React, { useState } from 'react';
// import CardPlantas from '../Card/CardPlantas';
// import CardMacetas from '../Card/CardMacetas';
// import { useSelector } from 'react-redux';
// import medCuad from '../Utils/imges/macetas/medidasCuadradas.jpg';
// import medRec from '../Utils/imges/macetas/medidasRectangulares.jpg';
// import Tablero from './Tablero';

// const Catalogo = () => {
//   const catalogo = useSelector((state) => state.catalogo);


//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (image) => {
//     setSelectedImage(image);
//   };

//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setSelectedImage(null);
//     }
//   };

//   return (
//     <div className="my-[6rem] text-center">
//       <h1 className="text-5xl font-bold text-center mb-16">CATALOGO</h1>
//       <div className="flex columns-2">
//         {/* Tablero */}
//         <div className="w-[50%] md:w-[30%] lg:w-[30%] xl:w-[25%]">
//           <div className="sticky top-36 md:h-[35rem] mb-8 sm:mb-0">
//             <h1 className="mb-10 text-2xl md:text-4xl lg:text-4xl text-white font-bold">
//               PRESUPUESTO
//             </h1>
//             <Tablero />
//           </div>
//         </div>

//         <div className="w-[50%] sm:w-[70%] flex flex-col justify-center">
//           {/* Plantas */}
//           <div>
//             <h1 className=" text-3xl md:text-4xl lg:text-4xl text-white font-bold">
//               PLANTAS
//             </h1>
//             <div className="flex flex-row justify-center flex-wrap">
//               {catalogo.plantas.map((planta, index) => (
//                 <div key={index}>
//                   <CardPlantas {...planta} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Macetas */}
//           <div>
//             <h1 className="mb-6 mt-6 text-3xl md:text-4xl lg:text-4xl text-white font-bold">
//               MACETAS
//             </h1>
//             <div className="flex flex-row justify-center flex-wrap">
//               {catalogo.macetas.map((maceta, index) => (
//                 <div key={index}>
//                   <CardMacetas {...maceta} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flex flex-row justify-center flex-wrap">
//             <img
//               src={medRec}
//               alt="medidas Cuad."
//               className="rounded-md m-8 ml-6 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem] cursor-pointer transition-transform duration-300 transform hover:scale-105"
//               onClick={() => handleImageClick('medRec')}
//             />
//             <img
//               src={medCuad}
//               alt="medidas Rect."
//               className="rounded-md m-8 ml-6 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem] cursor-pointer transition-transform duration-300 transform hover:scale-105"
//               onClick={() => handleImageClick('medCuad')}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Overlay for enlarged image */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
//           onClick={handleOverlayClick}
//         >
//           <div className="relative flex flex-col items-center gap-8">
//             <button
//               className="absolute top-4 right-4 text-white text-3xl bg-black bg-opacity-70 rounded-full p-2"
//               onClick={() => setSelectedImage(null)}
//             >
//               &times;
//             </button>
//             {selectedImage === 'medRec' && (
//               <img
//                 src={medRec}
//                 alt="medidas Cuad."
//                 className="rounded-md h-[80%] max-w-[90%] transition-transform duration-300 transform scale-105"
//               />
//             )}
//             {selectedImage === 'medCuad' && (
//               <img
//                 src={medCuad}
//                 alt="medidas Rect."
//                 className="rounded-md h-[80%] max-w-[90%] transition-transform duration-300 transform scale-105"
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Catalogo;


