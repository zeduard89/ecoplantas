import React from 'react';
import { AdvancedImage } from '@cloudinary/react';


const Card = ( {image,title,description} ) => {
  return (
    <div className=' shadow-md rounded-md ml-5'>
      <div className='mb-4'>
        <AdvancedImage cldImg={image} alt='Imagen de la tarjeta' className=' rounded-md' />
      </div>
    </div>
  );
};

export default Card;
