import React from 'react';

const Skim = () => {
    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/RSffykkToW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-lg-6 text-start">
                    <h4 style={{ color: '#FF6F00' }}>SKIM</h4>
                    <h5>We Check the advertisement appears
                        to the user.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Skim;