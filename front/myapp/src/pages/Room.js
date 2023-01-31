
import Lightroom from "../components/Lightroom";
import Darkroom from "../components/Darkroom";
import Battleroom from "../components/Battleroom";
import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";


function Room() {

    const {room, setRoom} = useContext(RoomContext)
    
    return (
        <>
        {room ? (
            <div className="col-lg-12 text-center align-items-center">
                <button>Battle Room</button>
                <button>Battle Room</button>
                <button>Battle Room</button>  
            </div>
        ):(
            <div>
                <button>Battle Room</button>
                <button>Battle Room</button>
                <button>Battle Room</button>  
            </div>
        )}
        
        </>
    )
}

export default Room;