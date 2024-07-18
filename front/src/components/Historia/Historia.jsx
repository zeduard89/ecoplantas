import React  from 'react';
import Card from '../Card/Card'
// Import Swiper React components
import { AdvancedImage } from '@cloudinary/react';
import { banner1, banner2, banner3, banner4 } from '../Utils/Cloudinary/Cloudinary';



const Historia = () => {
  return (
    <div>
      <div className="mt-[8rem] mx-[1rem] space-x-1  sm:flex flex-row justify-center content-center text-center	">
        <div className="sm:w-[80rem] mr-[1.5rem] ">
          <Card  image={banner1} />
        </div>
        <div className='content-center'>
          <h1 className='mb-[1rem] text-5xl'>?Quienes Somos?</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        </div>
      </div>


      <h1 className="col-span-1 m-[2rem] text-center">NUESTRA HISTORIA</h1>
      
      <div className="grid  mb-[10rem] m-[1rem] grid-cols-2 text-center ">
        <div className="col-span-1 w-[70%] flex flex-col">  
          <Card image={banner1}/>
          <h3 className=' content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        </div>
        <div className="col-span-1 w-[70%] pt-[100%] flex flex-col">  
          <Card image={banner1}/>
          <h3 className=' content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        </div>
        <div className="col-span-1 w-[70%] flex flex-col">  
          <Card image={banner1}/>
          <h3 className=' content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        </div>
        <div className="col-span-1 w-[70%] pt-[100%] flex flex-col">  
          <Card image={banner1}/>
          <h3 className=' content-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        </div>
        
      </div>

    </div>
  )
}

export default Historia
