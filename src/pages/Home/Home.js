

import * as React from 'react';

import Navindex from '../Nav/Navindex.js'
import CarouselHome from './CarouselHome.js';


import tea from './CardPhotos/tea.png';
import tayors from './CardPhotos/tayors.png';

function Home() {

    return (
        <>
            <Navindex />
            <div>
                <CarouselHome />
                <div>
                    <h3>Pick up where you left off</h3>
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
