import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import man1 from '../../src/image/man1.jpg'
import man2 from '../../src/image/man2.jpg'
import man3 from '../../src/image/man3.jpg'

import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination } from "swiper";

const TitleCarousel = () => {
    return (
        <div className='my-5'>
            <h4 className='mb-4' style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>Reviews</h4>
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
                    <div className='d-flex' >
                        <img style={{ width: '90px' }} src={man1} alt="" />
                        <div>
                            <p className='ps-4 mt-5'>Outstanding Shop ever i saw.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className='d-flex text-start' >
                    <img style={{ width: '100px' }} src={man2} alt="" />
                    <div>
                        <p className='ps-4 mt-5'>books are one of the best friend of you.
                            <br />
                            This shop is so much friendly</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className='d-flex' >
                    <img style={{ width: '90px' }} src={man3} alt="" />
                    <div>
                        <p className='ps-4 mt-5'>Uniq book is here.</p>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TitleCarousel;