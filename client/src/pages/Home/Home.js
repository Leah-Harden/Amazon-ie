

import * as React from 'react';

import Navindex from '../Nav/Navindex.js'
import CarouselHome from './CarouselHome.js';
import CardPickOff from './Cards/CardPickOff.js';
import CardShopping from './Cards/CardShopping.js';


import tea from './Cards/CardPhotos/tea.png';
import tayors from './Cards/CardPhotos/tayors.png';

import FitBit from './HomePhotos/FitBit.png';
import Ad from './HomePhotos/Ad.png';

import Pretty from './HomePhotos/Pretty.png';

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

                            </div>
                        </div>
                    </div>
                </div>


                {/* next row */}

                <div className='cardRow'>

                    <div className='movieAdAll'>

                        <div className='topTextPrettyAdAll'>

                            <h2 className='topTextTopPretty'>Video: Recommended for you</h2>
                            <h3 className='topTextBottomPretty'>The Summer I Turned Pretty - Season 1</h3>
                        </div>

                        <img className="movieAd" src={Pretty} alt="First slide" />
                        {/* <div className='bottomTextPrettyAll'>

                        <a href='#' alt='Start watching'>Start watching</a>
                        <button>Add to Watchlist</button>
                    </div> */}
                    </div>


                    <div>
                        <h2>Top Deal</h2>
                        <img className="vacAd" src={Ad} alt="First slide" />
                        <div>
                            <div>
                                <p><span>45</span>% off</p>
                                <div>Top deal</div>
                            </div>
                            <div>
                                <h6>$103.99</h6><p>List Price: <span>189.99</span></p>
                            </div>
                            <p>Mimoglad Ergonomic Chairs</p>
                        </div>
                        <a href='#'>See all deals</a>
                    </div>

                    <div>
                        <h3>Get Valorant content with Prime</h3>
                        <img className="vacAd" src={Ad} alt="First slide" />
                        <a href='#'>Claim with Prime</a>
                    </div>
                </div>

            </div>
        </>

    );
}

export default Home;


