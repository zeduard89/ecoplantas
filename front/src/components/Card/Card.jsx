import React from 'react';

const Card = ( {image, shadowOn} ) => {
  return (
    <div className=' rounded-md ml-5 '>
      <div className='mb-4 '>
        <img src={image} alt="Imagen" className={`rounded-md h-[20rem] w-[20rem] ${shadowOn ? 'shadow-card-history' : 'shadow-card-landing'}`} />
        
      </div>
    </div>
  );
};

export default Card;
