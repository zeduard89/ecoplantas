import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Carrousel = () => {
    const cld = new Cloudinary({ cloud: { cloudName: 'dmcpjkhou' } });

    const img1 = cld.image('Ejemplo_Banner_1_owuhez');
    const img2 = cld.image('Ejemplo_Banner_2_rxffsg');
    const img3 = cld.image('Ejemplo_Banner_4_aitj4p');
    const img4 = cld.image('Ejemplo_Banner_3_eevk4q');


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={2000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><AdvancedImage cldImg={img1} /></SwiperSlide>
        <SwiperSlide><AdvancedImage cldImg={img2} /></SwiperSlide>
        <SwiperSlide><AdvancedImage cldImg={img3} /></SwiperSlide>
        <SwiperSlide><AdvancedImage cldImg={img4} /></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
    );
};

export default Carrousel;
