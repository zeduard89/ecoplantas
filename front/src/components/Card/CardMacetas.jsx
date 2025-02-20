import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../redux/catalogoSlice';

const CardMacetas = ({id, title, content,imgUrl, category }) => {
        
    const dispatch = useDispatch();
    let element = useSelector((state) => state.catalogo[category]);
    element = element?.find(item => item.title === title)
    // Actualiza el componente o realiza una acción cuando 'count' cambia

    
    const handleIncrement = () => {
      
        dispatch(increment({ title, category }));
    };

    const handleDecrement = () => {
        dispatch(decrement({ title, category }));
    };

    if (!imgUrl) {
        console.error('Image is undefined or null');
        return null;
    }

    return (
    <div className='relative text-center rounded-md p-7 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem]'>
        <div className='absolute top-10 right-10 font-bold bg-green-700/30 border-2 border-gray-500 w-7 h-7 rounded flex items-center justify-center'>
            {element.cuantity}
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
        <h1 className='h-[2.5rem] text-white place-content-center bg-green-700 text-lg font-bold '>{title}</h1>
        {/* H3: Limited to 142 chars */}
        <div className=' bg-green-700/20 rounded-b-md text-[0.79rem] md:text-sm lg:text-sm overflow-hidden text-ellipsis text-left p-2'>
            <p>Boca: {content.boca} mm</p>
            <p>Base: {content.base} mm</p>
            <p>Altura: {content.altura} mm</p>
            <p>Peso: {content.peso} mm</p>
            <p>Capacidad: {content.capacidad} mm</p>
            {content.plato ? (<p>Plato:{content.plato} mm</p>) : (null)}
        </div>
        
    </div>

  );
};

export default CardMacetas;

