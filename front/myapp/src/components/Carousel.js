import '../css/Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';

function FadeCarousel() {
    return (

        <div className='carousel'>
            <Carousel fade pause='hover'>
                <Carousel.Item>
                    <img className="d-block w-100" src="../img/image23.png" alt="the sense"/>
                        <Carousel.Caption>
                            <p>“C'est dingue, j'ai vraiment eu l'impression d'être transportée dans un autre monde. Avant je ne faisais pas d'expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j'ai pu traverser la frontière du réel.”</p>
                            <p>- Denise, 23 Octobre 2020 -</p>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="../img/image22.png" alt="the sense"/>
                    <Carousel.Caption>
                        <h3>les équipements the sense</h3>
                        <p>Tous nos équipements sont prévus pour toutes les tailles et tous les âges, ils conviennent aussi bien aux adultes qu'aux jeunes enfants de 12ans. Ils vous garantissent un confort à toutes épreuves lors de vos voyages chez nous.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="../img/image21.png" alt="the sense"/>
                    <Carousel.Caption>
                        <h3>Nouvelle room en vue !</h3>
                        <p>En 2021, préparez-vous à manger du slime en pleine face, les fantômes de Ghost Buster arrivent chez THE SENSE. Cela promet de belles parties de chasse aux fantômes dans tout le complexe. Les réservations sont d'ores et déjà possibles sur place et en Février sur internet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <CarouselItem>
                    <img className="d-block w-100" src="../img/image20.png" alt="the sense"/>
                    <Carousel.Caption>
                        <p>“Avec mes fils nous avons tenté l'expérience “NAMELESS”, moi qui pensais avoir tout vu dans le domaine de l'horreur, je ne me suis jamais autant trompé. Si vous êtes à la recherche de sensations fortes et de frissons, la DARK ROOM est faite pour vous.”</p>
                        <p>- Nicolas, 3 Septembre 2020 -</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img className="d-block w-100" src="../img/image27.png" alt="the sense"/>
                    <Carousel.Caption>
                        <p>“C'est dingue, j'ai vraiment eu l'impression d'être transporté dans un autre monde. Avant je ne faisais pas d'expérience VR car je ne croyais pas en la qualité mais grâce à The Sense, j'ai pu traverser la frontière du réel.”</p>
                        <p>- Denise, 23 Octobre 2020 -</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>

    );
}

export default FadeCarousel;