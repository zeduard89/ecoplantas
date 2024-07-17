import React from 'react'

//Cloudinary
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


const Home = () => {

  const cld = new Cloudinary({ cloud: { cloudName: 'dmcpjkhou' } });
  const img = cld.image('banner_stkrfw')


  return (
    <home className ='bg-black'>
      
      <div className='relative'>
        <AdvancedImage className='h-[30rem] w-full' cldImg={img} />
        <div className='absolute bg-black/[.3] inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-4xl font-bold mb-2'>Eco Plantas</h1>
          <h2 className='text-xl'>Alquiler de plantas para eventos.</h2>
        </div>
      </div>


    </home>
  )
}

export default Home
