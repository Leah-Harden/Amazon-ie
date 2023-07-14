
import Carousel from 'react-bootstrap/Carousel';

import kids from './HomePhotos/kids.png';
import house from './HomePhotos/house.png';
import Alexa from './HomePhotos/alexa.png';

function CarouselHome() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={kids} alt="First slide" />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100" src={house} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" src={Alexa} alt="Third slide" />
                </Carousel.Item>
            </Carousel>

        </>
    )
}


export default CarouselHome;