import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import color from '../img/color.png'
import leprogres from '../img/leprogres.png'
import lyonmag from '../img/lyonmag.png'

function FadeCarouselavis() {
    return (

        <div className='carouselavis'>
            <Carousel fade pause='hover' variant="dark">
                <Carousel.Item>
                    <img className="d-block w-100" src={color} alt="" />
                    <Carousel.Caption>
                        <div className='journal'>
                            <img className="img-fluid" src={leprogres} alt="" />
                        </div>
                        <p>“C'est la meilleure manière de faire découvrir l'expérience VR à vos enfants et vos grand-parents mais aussi de changer des perpétuels bowlings ou séances de cinéma du week-end.”</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <CarouselItem>
                    <img className="d-block w-100" src={color} alt="" />
                    <Carousel.Caption>
                        <div className='journal'>
                            <img className="img-fluid" src={lyonmag} alt="" />
                        </div>
                        <p>"Bluffé par la qualité du service, que ce soit l'accueil et la price en charge du groupe. Quant à l'expérience, rien à dire, c'est une expérience unique au monde."</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>

    );
}

export default FadeCarouselavis;