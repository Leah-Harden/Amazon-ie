

import * as React from 'react';

import Navindex from '../Nav/Navindex.js'
import CarouselHome from './CarouselHome.js';
import cardPickOff from './Cards/cardPickOff.js';



import tea from './Cards/CardPhotos/tea.png';
import tayors from './Cards/CardPhotos/tayors.png';

function Home() {

    return (
        <>
            <Navindex />
            <div className='homePageWidth'>
                <CarouselHome />
                <div className='cardRow'>

                    <cardPickOff />

                    <div className='cardPick'>
                        <h5 className='cardTitle'>Keep shopping for</h5>
                        <div className='cardGrid'>
                            <div className='cardView'>
                                <img src={tea} alt='' className='photoPick' />
                                <h6 className='titleHere'>Titlehere</h6>
                                <h6 className='viewHere'><span>2</span> viewed</h6>
                            </div>
                            <div className='cardView'>
                                <img src={tayors} alt='' className='photoPick' />
                                <h6 className='titleHere'>Titlehere</h6>
                                <h6 className='viewHere'><span>2</span> viewed</h6>
                            </div>
                            <div className='cardView'>
                                <img src={tea} alt='' className='photoPick' />
                                <h6 className='titleHere'>Titlehere</h6>
                                <h6 className='viewHere'><span>2</span> viewed</h6>
                            </div>
                            <div className='cardView'>
                                <img src={tayors} alt='' className='photoPick' />
                                <h6 className='titleHere'>Titlehere</h6>
                                <h6 className='viewHere'><span>2</span> viewed</h6>
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
                        <p className='titleHere'>Shop your everyday essentials</p>
                        <a href='#'>See more</a>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;


