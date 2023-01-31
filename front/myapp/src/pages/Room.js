
import Lightroom from "../components/Lightroom";
import Darkroom from "../components/Darkroom";
import Battleroom from "../components/Battleroom";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";


function Room() {

    const { roomContext, setRoomContext } = useContext(RoomContext);

    return (
        <>
            {/* { (!roomContext) ? <Lightroom />
            : (roomContext === 'lightRoom') ? <Lightroom /> 
            : (roomContext === 'darkRoom') ? <Darkroom /> 
            : <Battleroom /> } */}
        </>

    )
}

export default Room;