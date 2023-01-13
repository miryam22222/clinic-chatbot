import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Card from './card';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ClinicScroller() {
    return (
        <Swiper
            dir="rtl"
            slidesPerView={'auto'}
            centeredSlides={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className="blue-border">
                <div className="text-in-card">
                    english text 123 123 123
                </div>
            </SwiperSlide>
            <SwiperSlide className="blue-border">123</SwiperSlide>
            <SwiperSlide className="blue-border">123</SwiperSlide>

        </Swiper >
    );

}