import React from 'react';
import Available from './Available';
import Reviews from './Reviews';
import Title from './Title';
import Versatile from './Versatile';

const Home = () => {
    return (
        <div>
            <Title></Title>
            <Available></Available>
            <Versatile></Versatile>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;