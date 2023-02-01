import Lightroom from "../components/Lightroom";
import Darkroom from "../components/Darkroom";
import Battleroom from "../components/Battleroom";
import Creativeroom from "../components/Creativeroom";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import lightroom from "../img/lightroom.png"
import darkroom from "../img/darkroomBlack.png"
import battleroom from "../img/battleroom.png"
import creativeroom from "../img/creativeroom.png"
// import lightroomWhite from "../img/lightroomWhite.png"
import darkroomWhite from "../img/darkroom.png"
// import battleroomWhite from "../img/battleroomWhite.png"
// import creativeroomWhite from "../img/creativeroomWhite.png"


function Room() {

    const { room, setRoom } = useContext(RoomContext)


    const setLightroom = () => {
        setRoom('Lightroom');
    }

    const setDarkroom = () => {
        setRoom('Darkroom');
    }

    const setBattleroom = () => {
        setRoom('Battleroom');
    }

    const setcreativeroom = () => {
        setRoom('Creativeroom');
    }

    return (
        <>
            {(!room) ? (
                <>
                    <div className="col-lg-12 text-center align-items-center div-imgs-room row">
                        <div className="col-lg-2 offset-lg-2 text-center">
                            <img src={darkroom} className="img-fluid img-room" onClick={setDarkroom}></img>
                        </div>
                        <div className="col-lg-2 offset-lg-1 text-center">
                            <img src={battleroom} className="img-fluid img-room" onClick={setBattleroom}></img>
                        </div>
                        <div className="col-lg-2 offset-lg-1 text-center">
                            <img src={creativeroom} className="img-fluid img-room" onClick={setcreativeroom}></img>
                        </div>
                        <div className="col-lg-12 text-center div-img-room">
                            <img src={lightroom} className="img-fluid img-room" onClick={setLightroom}></img>
                        </div>
                    </div>
                    <Lightroom />
                </>
            ) : (
                (room === 'Lightroom') ? (
                    <>
                        <div className="col-lg-12 text-center align-items-center div-imgs-room row">
                            <div className="col-lg-2 offset-lg-2 text-center">
                                <img src={darkroom} className="img-fluid img-room" onClick={setDarkroom}></img>
                            </div>
                            <div className="col-lg-2 offset-lg-1 text-center">
                                <img src={battleroom} className="img-fluid img-room" onClick={setBattleroom}></img>
                            </div>
                            <div className="col-lg-2 offset-lg-1 text-center">
                                <img src={creativeroom} className="img-fluid img-room" onClick={setcreativeroom}></img>
                            </div>
                            <div className="col-lg-12 text-center div-img-room">
                                <img src={lightroom} className="img-fluid img-room" onClick={setLightroom}></img>
                            </div>
                        </div>
                        <Lightroom />
                    </>
                ) : (
                    (room === 'Darkroom') ? (
                        <>
                            <div className="col-lg-12 text-center align-items-center div-imgs-room row">
                                <div className="col-lg-2 offset-lg-2 text-center">
                                    <img src={battleroom} className="img-fluid img-room" onClick={setBattleroom}></img>
                                </div>
                                <div className="col-lg-2 offset-lg-1 text-center">
                                    <img src={creativeroom} className="img-fluid img-room" onClick={setcreativeroom}></img>
                                </div>
                                <div className="col-lg-2 offset-lg-1 text-center">
                                    <img src={lightroom} className="img-fluid img-room" onClick={setLightroom}></img>
                                </div>
                                <div className="col-lg-12 text-center div-img-room">
                                    <img src={darkroom} className="img-fluid img-room-principal" onClick={setDarkroom}></img>
                                </div>
                            </div>
                            <Darkroom />
                        </>
                    ) : (
                        (room === 'Battleroom') ? (
                            <>
                                <div className="col-lg-12 text-center align-items-center div-imgs-room row">
                                    <div className="col-lg-2 offset-lg-2 text-center">
                                        <img src={lightroom} className="img-fluid img-room" onClick={setLightroom}></img>
                                    </div>
                                    <div className="col-lg-2 offset-lg-1 text-center">
                                        <img src={darkroom} className="img-fluid img-room" onClick={setDarkroom}></img>
                                    </div>
                                    <div className="col-lg-2 offset-lg-1 text-center">
                                        <img src={creativeroom} className="img-fluid img-room" onClick={setcreativeroom}></img>
                                    </div>
                                    <div className="col-lg-12 text-center div-img-room">
                                        <img src={battleroom} className="img-fluid img-room-principal" onClick={setBattleroom}></img>
                                    </div>
                                </div>
                                <Battleroom />
                            </>
                        ) : (
                            (room === 'Creativeroom') ? (
                                <>
                                    <div className="col-lg-12 text-center align-items-center div-imgs-room row">
                                        <div className="col-lg-2 offset-lg-2 text-center">
                                            <img src={lightroom} className="img-fluid img-room" onClick={setLightroom}></img>
                                        </div>
                                        <div className="col-lg-2 offset-lg-1 text-center">
                                            <img src={darkroom} className="img-fluid img-room" onClick={setDarkroom}></img>
                                        </div>
                                        <div className="col-lg-2 offset-lg-1 text-center">
                                            <img src={battleroom} className="img-fluid img-room" onClick={setBattleroom}></img>
                                        </div>
                                        <div className="col-lg-12 text-center div-img-room">
                                            <img src={creativeroom} className="img-fluid img-room-principal" onClick={setcreativeroom}></img>
                                        </div>
                                    </div>
                                    <Creativeroom />
                                </>
                            ) : (
                                <h1>ERREUR 404<br />PAGE NON TROUVÉE</h1>
                            )
                        )
                    )
                )
            )
            }
        </>
    )
}

export default Room;