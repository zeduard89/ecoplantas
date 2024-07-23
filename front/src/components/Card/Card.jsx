import React from 'react';
import { AdvancedImage } from '@cloudinary/react';


const Card = ( {image, shadowOn} ) => {
  return (
    <div className=' rounded-md ml-5 '>
      <div className='mb-4 '>
        <AdvancedImage cldImg={image} alt='Imagen de la tarjeta'      className={`rounded-md ${shadowOn ? 'shadow-card-history' : 'shadow-card-landing'}`} />
      </div>
    </div>
  );
};

export default Card;
