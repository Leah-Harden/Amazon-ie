

import * as React from 'react';

import Navindex from '../Nav/Navindex.js'
import CarouselHome from './CarouselHome.js';


import tea from './CardPhotos/tea.png';
import tayors from './CardPhotos/tayors.png';

function Home() {

    return (
        <>
            <Navindex />
            <div className='homePageWidth'>
                <CarouselHome />
                <div className='cardPick'>
                    <h5 className='cardTitle'>Pick up where you left off</h5>
                    <div>
                        <img src={tea} alt='' />
                        <img src={tayors} alt='' />
                        <img src={tea} alt='' />
                        <img src={tayors} alt='' />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;
