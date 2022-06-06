import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Versatile.css'

const Versatile = () => {
    return (
        <div className='container'>
            <div className='d-flex align-items-center mt-5'>
                <div style={{ height: '1px', width: '400px' }} className='bg-black mb-3 me-2 '></div>
                <p className='mt-2 px-2'><h5 style={{ color: '#644F9C', fontFamily: 'sans-serif' }} >VERSATILE AD FORMATS</h5></p>
                <div style={{ height: '1px', width: '400px' }} className='bg-black  mb-3 ms-2'></div>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3 '>
                <Link to='/home' ><button className='versatile me-5'>POP-UNDER</button></Link>
                <Link to='/home/bannerad' ><button className='versatile  me-5'>BANNER AD</button></Link>
                <Link to='/home/native' ><button className=' versatile me-5'>NATIVE</button></Link>
                <Link to='/home/skim' ><button className='versatile  me-5'>SKIM</button></Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Versatile;