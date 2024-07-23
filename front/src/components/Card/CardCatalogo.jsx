import React from 'react';
import { AdvancedImage } from '@cloudinary/react';


const CardCatalogo = ({ image, title, description }) => {
        
    if (!image) {
        console.error('Image is undefined or null');
        return null;
    }
    
    return (
    <div className='text-center rounded-md p-4 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem]'>
        <AdvancedImage cldImg={image} alt='Imagen de la tarjeta' className='rounded-t-md' />
        <h1 className='h-[2.5rem] text-white place-content-center bg-green-700 text-lg font-bold '>{title}</h1>
        {/* H3: Limited to 211 chars */}
        <h4 className='h-[41%] bg-green-700/20 p-2 rounded-b-md text-[0.79rem] md:text-sm lg:text-sm'>{description}</h4>
    </div>

  );
};

export default CardCatalogo;
