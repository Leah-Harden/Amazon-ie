

import * as React from 'react';

import Navindex from '../Nav/Navindex.js'
import CarouselHome from './CarouselHome.js';
import CardPickOff from './Cards/CardPickOff.js';
import CardShopping from './Cards/CardShopping.js';


import tea from './Cards/CardPhotos/tea.png';
import tayors from './Cards/CardPhotos/tayors.png';

import FitBit from './HomePhotos/FitBit.png';
import Ad from './HomePhotos/Ad.png';



import PendingIcon from '@mui/icons-material/Pending';
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
                    <div className='colAds'>

                        <div className='fitBitAd'>
                            <div className='fitBitTextAll'>

                                <h3 className='fitBitText'>Shop Fitbit Versa 4 with Alexa Built-in</h3>
                                <a href='#'>Explore more</a>
                            </div>
                            <img className="" src={FitBit} alt="First slide" />
                        </div>


                        <div className='vacAdAll'>
                            <img className="vacAd" src={Ad} alt="First slide" />
                            <div className='vacAdTextAll'>
                                <p>Sponsored</p>
                                <PendingIcon />
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        </>

    );
}

export default Home;


