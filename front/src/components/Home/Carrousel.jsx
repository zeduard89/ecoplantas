import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../Utils/imges/carrousel/carrouselLoader'

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
                
        <SwiperSlide><img src={image.img1} alt="Imagen1" /></SwiperSlide>
        <SwiperSlide><img src={image.img2} alt="Imagen2" /></SwiperSlide>
        <SwiperSlide><img src={image.img3} alt="Imagen3" /></SwiperSlide>
        <SwiperSlide><img src={image.img4} alt="Imagen4" /></SwiperSlide>
        
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
