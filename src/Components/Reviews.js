import React from 'react';
import './Reviews.css'

const Reviews = () => {
    return (
        <div className='container my-5 pb-5 pt-3' style={{ backgroundColor: '#644F9C' }}>
            <h4 className='text-white my-4'>Why We Want!!</h4>
            <div className="row justify-content-around">
                <div className="col-lg-4 first mx-2">
                    <h2 className='text-white mt-2'>1 BN+</h2>
                    <p className='text-white '>Daily Impressions</p>
                </div>
                <div className="col-lg-4 second mx-2 ">
                    <h2 className='mt-4'>$500K+</h2>
                    <h5>Paid
                    </h5>
                </div>
                <div className="col-lg-4 third mx-2">
                    <h2>8K+</h2>
                    <p>Global Publishers</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;