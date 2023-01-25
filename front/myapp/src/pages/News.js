import Navbarbar from "../components/Navbar"
import image24 from '../img/image24.png';
import image26 from '../img/image26.png';

function News() {
    return (
        <div>
            <Navbarbar />
            <div className="head">
                <img src={image24} alt="" />
            </div>
            <div className="container">
                <img src={image26} alt="" />
                <h3>évènement : la légende du père noël</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt saepe? Qui libero similique odit reprehenderit iste nisi eius, consequatur, animi voluptatum laudantium nobis laboriosam possimus sapiente, voluptates aperiam distinctio.</p>
            </div>
        </div>
    )
}

export default News;