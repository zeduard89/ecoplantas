import React, { useRef, useState } from 'react';
import Card from '../Card/Card'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AdvancedImage } from '@cloudinary/react';
import { banner1, banner2, banner3, banner4 } from '../Utils/Cloudinary/Cloudinary';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './historia.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const Historia = () => {
  return (
    <div>
      <div className="mt-[8rem] mx-[1rem] space-x-1  sm:flex flex-row justify-center content-center text-center	">
        <div className="sm:w-[80rem] mr-[1.5rem] ">
          <Card  image={banner1} />
        </div>
        <div className='content-center'>
          <h1 className='mb-[3rem] text-5xl'>?Quienes Somos?</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        </div>
      </div>
      
      <div className="hidden lg:grid mt-[3rem] mb-[10rem] grid-cols-1 md:grid-cols-2 gap-0 text-center items-center justify-center">
        <h1 className="col-span-1 border-r-2 h-[60rem]">HISTORIA</h1>
        <h1 className="col-span-1 border-l-2 h-[60rem]">HISTORIA</h1>
      </div>

      <div className="grid lg:hidden mb-[10rem] mt-[3rem] grid-cols-1 text-center items-center justify-center">
        <h1 className="col-span-1 m-[2rem] ">HISTORIA</h1>
        <div className="m-[1.5rem] ">
          <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="card-swiper"
          >
            <SwiperSlide><AdvancedImage cldImg={banner1} /></SwiperSlide>
            <SwiperSlide><AdvancedImage cldImg={banner2} /></SwiperSlide>
            <SwiperSlide><AdvancedImage cldImg={banner3} /></SwiperSlide>
            <SwiperSlide><AdvancedImage cldImg={banner4} /></SwiperSlide>
          </Swiper>
        </div>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed accusamus delectus nostrum officiis ex odit reiciendis quidem facilis vitae omnis, nam sint qui quis nemo doloremque repellendus magnam voluptates?</h3>
        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt explicabo impedit voluptas eaque ratione ut, eveniet obcaecati veniam accusamus repellat consequuntur eum, labore in perferendis officiis numquam debitis est similique!</h3>
      </div>

    </div>
  )
}

export default Historia
