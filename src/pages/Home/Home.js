

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
                <div className='cardRow'>

                    <div className='cardPick'>
                        <h5 className='cardTitle'>Pick up where you left off</h5>
                        <div>
                            <img src={tea} alt='' />
                            <img src={tayors} alt='' />
                            <img src={tea} alt='' />
                            <img src={tayors} alt='' />
                        </div>
                    </div>
                    <div className='cardPick'>
                        <h5 className='cardTitle'>Keep shopping for</h5>
                        <div className='cardGrid'>
                            <div className='cardView'>
                                <img src={tea} alt='' />
                                <h6>Titlehere</h6>
                                <h6><span>2</span> viewed</h6>
                            </div>
                            <div className='cardView'>
                                <img src={tayors} alt='' />
                                <h6>Titlehere</h6>
                                <h6><span>2</span> viewed</h6>
                            </div>
                            <div className='cardView'>
                                <img src={tea} alt='' />
                                <h6>Titlehere</h6>
                                <h6><span>2</span> viewed</h6>
                            </div>
                            <div className='cardView'>
                                <img src={tayors} alt='' />
                                <h6>Titlehere</h6>
                                <h6><span>2</span> viewed</h6>
                            </div>
                        </div>
                        <a href='#'>View your browsing history</a>
                    </div>


                    <div className='cardPick'>
                        <h5 className='cardTitle'>Buy Again</h5>
                        <div>
                            <img src={tea} alt='' />
                            <img src={tayors} alt='' />
                            <img src={tea} alt='' />
                            <img src={tayors} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;
