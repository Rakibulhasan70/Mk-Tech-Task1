import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

const TitleCarousel = () => {
    return (
        <div className='my-5'>
            <h4>Title</h4>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='d-flex' style={{ border: '1px solid red' }}>
                        <img src="" alt="" />
                        <div>
                            <h5>Title</h5>
                            <p>Hello, Here will be a text</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className='d-flex text-start' style={{ border: '1px solid red' }}>
                    <img src="" alt="" />
                    <div>
                        <h5>Title</h5>
                        <p>Hello, Here will be a text</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='d-flex' style={{ border: '1px solid red' }}>
                    <img src="" alt="" />
                    <div>
                        <h5>Title</h5>
                        <p>Hello, Here will be a text</p>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TitleCarousel;