import React from 'react'
import Carrousel from './Carrousel';

//Cloudinary
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';


const Home = () => {

  const cld = new Cloudinary({ cloud: { cloudName: 'dmcpjkhou' } });
  const img = cld.image('banner_stkrfw')


  return (
    <div className ='bg-black'>
      
      {/* <div className='relative'>
        <AdvancedImage className='h-[35rem] w-full' cldImg={img} />
        <div className='absolute bg-black/[.3] inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-7xl font-bold mb-2'>Eco Plantas</h1>
          <h2 className='text-3xl'>Alquiler de plantas para eventos.</h2>
        </div>
      </div> */}
      <Carrousel/>


    </div>
  )
}

export default Home
