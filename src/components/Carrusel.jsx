import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


export default function Carrusel({ images }) {
    return (
        <div class="flex w-auto justify-start items-start">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                //   pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                initialSlide = {1}
            // modules={[Pagination, Navigation]}
            // className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} className="block w-full h-full object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
