

import * as React from 'react';

import Navindex from '../Nav/Navindex.js'
import CarouselHome from './CarouselHome.js';
import CardPickOff from './Cards/CardPickOff.js';
import CardShopping from './Cards/CardShopping.js';


import tea from './Cards/CardPhotos/tea.png';
import tayors from './Cards/CardPhotos/tayors.png';

function Home() {

    return (
        <>
            <Navindex />
            <div className='homePageWidth'>
                <CarouselHome />
                <div className='cardRow'>

                    <CardPickOff />

                    <CardShopping />


                    <div className='cardPick'>
                        <h5 className='cardTitle'>Buy Again</h5>
                        <div>
                            <img src={tea} alt='' />
                            <img src={tayors} alt='' />
                            <img src={tea} alt='' />
                            <img src={tayors} alt='' />
                        </div>
                        <p className='titleHere'>Shop your everyday essentials</p>
                        <a href='#'>See more</a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;


