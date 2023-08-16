
import tea from './CardPhotos/tea.png';
import tayors from './CardPhotos/tayors.png';


function CardShopping() {

    return (

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

    )
}

export default CardShopping