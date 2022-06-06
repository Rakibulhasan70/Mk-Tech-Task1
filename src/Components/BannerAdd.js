import React from 'react';
import book2 from '../../src/image/book2.webp'

const BannerAdd = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <img width='250' style={{ borderRadius: '10px' }} src={book2} alt="" />
                </div>
                <div className="col-lg-6 text-start">
                    <h4 style={{ color: '#FF6F00' }}>BANNER AD</h4>
                    <h5>We work to connect readers with BookStore booksellers all over the world.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default BannerAdd;