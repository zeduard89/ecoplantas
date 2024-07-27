import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../redux/prosupuestoSlice';

const CardPlantas = ({ id, title, content, imgUrl }) => {
  const dispatch = useDispatch();
  const formattedTitle = title.toLowerCase().trim().replace(/\.$/, '').replace(/ /g, "");
  const count = useSelector((state) => state.presupuesto[formattedTitle]);
  // Actualiza el componente o realiza una acción cuando 'count' cambia

  
  const handleIncrement = () => {
    dispatch(increment({ formattedTitle }));
  };

  const handleDecrement = () => {
    dispatch(decrement({ formattedTitle }));
  };

  if (!imgUrl) {
    console.error('Image is undefined or null');
    return null;
  }

  return (
    <div className='relative text-center rounded-md p-7 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem]'>
      <div className='absolute top-10 right-10 bg-white text-black border-2 border-gray-500 w-7 h-7 rounded flex items-center justify-center'>
        {count}
      </div>
      <img src={imgUrl} alt='Imagen de la tarjeta' className='rounded-t-md w-full h-[65%] object-cover' />
      <button 
        className='absolute bottom-[7.7rem] left-9 w-6 h-6 rounded text-4xl  text-white'
        onClick={handleIncrement}
        aria-label='Increment'
      >
        +
      </button>
      <button 
        className='absolute bottom-[7.8rem] right-9 w-6 h-6 rounded text-4xl  text-white'
        onClick={handleDecrement}
        aria-label='Decrement'
      >
        -
      </button>
      <h1 className='h-[2.5rem] text-white flex items-center justify-center bg-green-700 text-lg font-bold'>
        {title}
      </h1>
      <h4 className='h-[30%] bg-green-700/20 p-2 rounded-b-md text-[0.79rem] md:text-sm lg:text-sm overflow-hidden text-ellipsis'>
        {content}
      </h4>
    </div>
  );
};

export default CardPlantas;



// import React, {useState} from 'react';
// import { useSelector } from 'react-redux';



// const CardPlantas = ({id, title, content,imgUrl }) => {

//     const presupuesto = useSelector((state) => state.presupuesto);
//     console.log(presupuesto)

//     if (!imgUrl) {
//         console.error('Image is undefined or null');
//         return null;
//     }

    
//     return (
//     <div className='relative text-center rounded-md p-7 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem]'>
//         <div className='absolute top-10 right-10 right-10 bg-white border-2 border-gray-500 w-7 h-7 rounded'></div>
//         <img src={imgUrl} alt='Imagen de la tarjeta' className='rounded-t-md w-full h-[65%] object-cover' />
//         <button className='absolute bottom-[7.8rem] left-9 w-6 h-6 rounded text-4xl'>+</button>
//         <button className='absolute bottom-[7.8rem] right-9 w-6 h-6 rounded text-4xl'>-</button>
//         <h1 className='h-[2.5rem] text-white place-content-center bg-green-700 text-lg font-bold '>{title}</h1>
//         {/* H3: Limited to 142 chars */}
//         <h4 className='h-[30%]  bg-green-700/20 p-2 rounded-b-md text-[0.79rem] md:text-sm lg:text-sm overflow-hidden text-ellipsis'>{content}</h4>
//     </div>

//   );
// };

// export default CardPlantas;
