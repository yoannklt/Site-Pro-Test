import Navbarbar from "../components/Navbar"
import image9  from "../img/image9.png"

function Home() {
    return(
        <div>
            <Navbarbar/>
            <div className="container">
                <div className="row home text-center">
                    <div className="col col-lg-12 hero">

                    </div>
                    <div className="col col-lg-12">
                        <button className="discoverButton">Découvrir</button>
                    </div>
                </div>
                <div className="description row">
                    <div className="col col-lg-6">
                        <div className="image9">
                            <img src={image9}/>
                        </div>
                    </div>
                    <div className="col col-lg-6">
                        <h1>Qu'est-ce que </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;