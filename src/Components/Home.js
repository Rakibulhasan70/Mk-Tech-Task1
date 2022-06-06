import React from 'react';
import Available from './Available';
import Reviews from './Reviews';
import Title from './Title';
import TitleCarousel from './TitleCarousel';
import Versatile from './Versatile';

const Home = () => {
    return (
        <div>
            <Title></Title>
            <Available></Available>
            <Versatile></Versatile>
            <Reviews></Reviews>
            <TitleCarousel></TitleCarousel>
        </div>
    );
};

export default Home;