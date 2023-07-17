
import * as React from 'react';

import tea from './CardPhotos/tea.png';
import tayors from './CardPhotos/tayors.png';



function cardPickOff({ one, two, three, four }) {
    return (
        <div className='cardPick'>
            <div>{[one, two, three, four]}</div>
            <h5 className='cardTitle'>Pick up where you left off</h5>
            <div className='cardGrid'>
                <div className='cardView'>
                    <img src={tea} alt='' className='photoPick' />
                    <h6 className='titleHere'>Titlehere</h6>

                </div>
                <div className='cardView'>
                    <img src={tayors} alt='' className='photoPick' />
                    <h6 className='titleHere'>Titlehere</h6>

                </div>
                <div className='cardView'>
                    <img src={tea} alt='' className='photoPick' />
                    <h6 className='titleHere'>Titlehere</h6>

                </div>
                <div className='cardView'>
                    <img src={tayors} alt='' className='photoPick' />
                    <h6 className='titleHere'>Titlehere</h6>

                </div>
            </div>
        </div>

    );

}

export default cardPickOff;
