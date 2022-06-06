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
                    <h5>Reading is a key component of early literacy development and you can set an example of just how crucial this is by modeling the behaviour yourself. Children are excellent at mimicking the adults around them which means that if you regularly set aside some "me time" for reading, your children will learn to do the same.
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Skim;