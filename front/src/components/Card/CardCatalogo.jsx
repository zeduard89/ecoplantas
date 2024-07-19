import React from 'react';
import { AdvancedImage } from '@cloudinary/react';


const CardCatalogo = ({ image, title, description }) => {
        
    if (!image) {
        console.error('Image is undefined or null');
        return null;
    }
    
    return (
    <div className='text-center shadow-md rounded-md p-4 h-[25rem] w-[18rem]'>
        <AdvancedImage cldImg={image} alt='Imagen de la tarjeta' className='rounded-t-md' />
        <h1 className='h-[2.5rem] place-content-center bg-green-700 text-lg font-bold '>{title}</h1>
        <h3 className='bg-green-700/20 p-2 rounded-b-md text-sm'>{description}</h3>
    </div>
  );
};

export default CardCatalogo;
