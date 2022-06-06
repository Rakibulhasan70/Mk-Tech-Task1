import React from 'react';
import fb from '../../src/image/social/facebook.png'
import google from '../../src/image/social/google.png'
import github from '../../src/image/social/github.png'

const Footer = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <p style={{ color: '#644F9C', fontFamily: 'sans-serif' }}>We are social </p>
                    <h6>FOLLOW US</h6>
                    <img width='30px' src={fb} alt="" />
                    <img src={google} alt="" />
                    <img src={github} alt="" />
                    <h6>LOGO</h6>
                </div>
                <div className="col-lg-3">
                    <p style={{ color: '#644F9C', fontFamily: 'sans-serif' }}>Links</p>
                    <h6>ADVERTISERS </h6>
                    <h6 className='mt-3'>PUBLISHERS
                    </h6>
                    <h6 className='mt-3'>INFLUENCERS</h6>
                    <h6 className='mt-3'>AD FORMATS </h6>
                </div>
                <div className="col-lg-3">
                    <p style={{ color: '#644F9C', fontFamily: 'sans-serif' }}>Documentation </p>
                    <h6 className='mt-3'>TERMS & CONDITIONS </h6>
                    <h6 className='mt-3'>PRIVACY POLICY</h6>
                    <h6 className='mt-3'>CANCELLATION POLICY </h6>
                    <h6 className='mt-3'>BLOG</h6>
                </div>
                <div className="col-lg-3">
                    <p style={{ color: '#644F9C', fontFamily: 'sans-serif' }}>Support</p>
                    <h6 className='mt-3'>FAQ</h6>
                    <h6 className='mt-3'>MEDIA KIT</h6>
                    <h6 className='mt-3'>CONTACT US</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;