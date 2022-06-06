import React from 'react';
import banner from '../../src/image/bannerbook.webp'

const Title = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-6 ">
                    <h2 style={{ color: '#644F9C', fontFamily: 'sans-serif' }} >Creative Shop</h2>
                    <br />
                    <br />
                    <h5 className='text-start'>BookStore began as an idea to help support bookstores and our communities at a time when more and more people were buying their books online. We saw an opportunity to create an alternative to Daraz for socially-conscious online shoppers. That shift threatens the future of bookstores and will hurt readers, authors, and publishers who rely on a diverse, healthy ecosystem for books.</h5>
                </div>
                <div className="col-lg-6">
                    <img width='100%' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Title;