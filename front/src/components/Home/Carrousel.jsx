import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AdvancedImage } from '@cloudinary/react';
import { banner1, banner2, banner3, banner4 } from '../Utils/Cloudinary/Cloudinary';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carrousel.css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Carrousel = () => {
   


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
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><AdvancedImage cldImg={banner1} /></SwiperSlide>
        <SwiperSlide><AdvancedImage cldImg={banner2} /></SwiperSlide>
        <SwiperSlide><AdvancedImage cldImg={banner3} /></SwiperSlide>
        <SwiperSlide><AdvancedImage cldImg={banner4} /></SwiperSlide>
        
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
