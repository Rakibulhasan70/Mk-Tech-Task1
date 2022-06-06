import React from 'react';
import book1 from '../../src/image/book1.jpg'

const PopUnder = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <img width='250' style={{ borderRadius: '10px' }} src={book1} alt="" />
                </div>
                <div className="col-lg-6 text-start">
                    <h4 style={{ color: '#FF6F00' }}>POP-UNDER</h4>
                    <h5>We ship your books from our wholesaler's warehouse directly to you, handle the customer service and overhead, and the bookstores get the profit.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default PopUnder;