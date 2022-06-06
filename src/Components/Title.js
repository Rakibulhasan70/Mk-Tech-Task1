import React from 'react';

const Title = () => {
    return (
        <div className='container'>
            <div className="row my-5">
                <div className="col-lg-6 text-start">
                    <h4 style={{ color: '#644F9C', fontFamily: 'sans-serif' }} >Here will be a title</h4>
                    <br />
                    <br />
                    <h5>Here will be text</h5>
                </div>
                <div className="col-lg-6">
                    <h2>Image</h2>
                </div>
            </div>
        </div>
    );
};

export default Title;