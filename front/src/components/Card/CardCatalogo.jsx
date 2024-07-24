import React from 'react';


const CardCatalogo = ({id, title, content,imgUrl }) => {
        
    if (!imgUrl) {
        console.error('Image is undefined or null');
        return null;
    }
    
    return (
    <div className='text-center rounded-md p-7 h-[25rem] w-[15rem] md:w-[18rem] lg:w-[18rem]'>
        <img src={imgUrl} alt='Imagen de la tarjeta' className='rounded-t-md w-full h-[60%] object-cover' />
        <h1 className='h-[2.5rem] text-white place-content-center bg-green-700 text-lg font-bold '>{title}</h1>
        {/* H3: Limited to 211 chars */}
        <h4 className='h-[41%]  bg-green-700/20 p-2 rounded-b-md text-[0.79rem] md:text-sm lg:text-sm overflow-hidden text-ellipsis'>{content}</h4>
    </div>

  );
};

export default CardCatalogo;
