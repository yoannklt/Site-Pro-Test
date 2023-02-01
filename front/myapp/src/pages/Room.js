import Lightroom from "../components/Lightroom";
import Darkroom from "../components/Darkroom";
import Battleroom from "../components/Battleroom";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import lightroom from "../img/lightroom.png"
import darkroom from "../img/darkroom.png"
import battleroom from "../img/battleroom.png"


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



    console.log(room)

    return (
        <>

            <div className="col-lg-12 text-center align-items-center mt-5">
                <img src={lightroom} onClick={setLightroom}></img>
                <img src={darkroom} onClick={setDarkroom}></img>
                <img src={battleroom} onClick={setBattleroom}></img>
            </div>
            {(!room) ? (
                <Lightroom />
            ) : (
                (room === 'Lightroom') ? (
                    <Lightroom />
                ) : (
                    (room === 'Darkroom') ? (
                        <Darkroom />
                    ) : (
                        (room === 'Battleroom') ? (
                            <Battleroom />
                        ) : (
                            <Lightroom />
                        )
                    )

                )
            )}
        </>
    )
}

export default Room;