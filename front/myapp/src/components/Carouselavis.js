import Carousel from 'react-bootstrap/Carousel';
import image23 from '../img/image23.png'
import image22 from '../img/image22.png'
import image21 from '../img/image21.png'
import image20 from '../img/image20.png'
import image27 from '../img/image27.png'
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function FadeCarousel() {
    return (

        <div className='carousel'>
            <Carousel
                fade
                pause hover
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image23}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>“C'est dingue, j'ai vraiment eu l'impression d'être transporté dans un autre monde. Avant je ne faisais pas d'expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j'ai pu traverser la frontière du réel.”
                        </h3>
                        <p>- Denise, 23 Octobre 2020 -</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image22}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>LES ÉQUIPEMENTS THE SENSE</h3>
                        <p>Tous nos équipements sont prévus pour toutes les tailles et tous les âges, ils conviennent aussi bien aux adultes qu'aux jeunes de 12 ans. Ils vous garantissent également un confort à toutes épreuves lors de vos voyages chez nous.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image21}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>NOUVELLE ROOM EN VUE !</h3>
                        <p>
                            En 2021, préparez à manger du slime en pleine face, les fantômes de Ghost Buster arrivent chez THE SENSE. Ça promet de belles parties de chasse aux fantômes dans tout le complexe. Les réservations sont d'ores et déjà possible sur place et en Février sur internet.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={image20}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h3>“Avec mes fils nous avons tenté l'expérience “NAMELESS”, moi qui pensais avoir tout vu dans le domaine de l'horreur, je ne me suis jamais autant trompé. Si vous êtes à la recherche de sensation forte et de frissons, la DARK ROOM est faite pour vous”</h3>
                        <p>- Nicolas, 3 Septembre 2020 -</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src={image27}
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h3>“C'est dingue, j'ai vraiment eu l'impression d'être transporté dans un autre monde. Avant je ne faisais pas d'expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j'ai pu traverser la frontière du réel.”</h3>
                        <p>- Denise, 23 Octobre 2020 -</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>

    );
}

export default FadeCarousel;