import React from 'react';
import book3 from '../../src/image/book3.webp'

const Native = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <img width='250' style={{ borderRadius: '10px' }} src={book3} alt="" />
                </div>
                <div className="col-lg-6 text-start">
                    <h4 style={{ color: '#FF6F00' }}>NATIVE</h4>
                    <h5>Books about our BookStores  The Storied Life of A. J. Fikry · Gabrielle Zevin, The Bookish Life of Nina Hill,  Abbi Waxman·Mr Penumbra's 24-Hour, Stories of Libraries,Novel,Books of Bangabandhu Sheikh Mujibur Rahman’s, Islamic book,Science-fiction book  etc.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Native;