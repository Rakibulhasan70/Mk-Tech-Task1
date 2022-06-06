import React from 'react';
import './Available.css'

const Available = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px', width: '400px' }} className='bg-black mb-3 me-2 '></div>
                    <p className='mt-2 px-2'><h5 style={{ color: '#644F9C', fontFamily: 'sans-serif' }} >AVAILABLE FOR EVERYONE</h5></p>
                    <div style={{ height: '1px', width: '400px' }} className='bg-black  mb-3 ms-2'></div>
                </div>
                <h5 className='mb-5'>Here will be a text   </h5>
                <div className="col-lg-4">
                    <i class="fa-solid fa-volume-low icone"></i>
                    <br />
                    <p className='mt-3'>Text 1</p>
                    <br />
                    <button className=' mb-5 btn'>Hello 1</button>
                </div>
                <div className="col-lg-4">
                    <i class="fa-solid fa-paper-plane icone"></i>
                    <br />
                    <p className='mt-3'>Text 2</p>
                    <br />
                    <button className='mb-5 btn'>Hello 2</button>
                </div>
                <div className="col-lg-4">
                    <i class="fa-solid fa-user icone"></i>
                    <br />
                    <p className='mt-3'>Text 3</p>
                    <br />
                    <button className='mb-5 btn'>Hello 3</button>
                </div>
            </div>

        </div>
    );
};

export default Available;