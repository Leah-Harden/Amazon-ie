
import * as React from 'react';

import Kid from './CardPhotos/Kid.png';
import Lost from './CardPhotos/Lost.png';
import Sleep from './CardPhotos/Sleep.png';
import Sold from './CardPhotos/Sold.png';




function CardPickOff({ one, two, three, four }) {
    return (
        <div className='cardPick'>
            <div>{[one, two, three, four]}</div>
            <h5 className='cardTitle'>Pick up where you left off</h5>
            <div className='cardGrid'>
                <a className='cardView' href='/product'>
                    <img src={Kid} alt='' className='photoPickUp' />
                    <h6 className='titleHere'>The Kid:A Novel</h6>

                </a>
                <div className='cardView'>
                    <img src={Lost} alt='' className='photoPickUp' />
                    <h6 className='titleHere'>Paradise Lost</h6>

                </div>
                <div className='cardView'>
                    <img src={Sleep} alt='' className='photoPickUp' />
                    <h6 className='titleHere'>Why We Sleep:Unlocki...</h6>

                </div>
                <div className='cardView'>
                    <img src={Sold} alt='' className='photoPickUp' />
                    <h6 className='titleHere'>Sold</h6>

                </div>
            </div>
        </div>

    );

}

export default CardPickOff;
