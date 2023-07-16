

import tea from './CardPhotos/tea.png';
import tayors from './CardPhotos/tayors.png';



function cardPick({ one, two, three, four }) {
    return (<div className='cardPick'>
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
    </div>);

}

export default cardPick;
