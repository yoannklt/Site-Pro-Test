import { RoomContext } from "../context/RoomContext";
import { useContext } from "react";
import Navbarbar from "../components/Navbar";

export default function RoomTest() {

    const {room, setRoom} = useContext(RoomContext);

    return(
        <div>
            <Navbarbar/>
            <button onClick={() => setRoom("CreativeRoom")}>
                Dark Room
            </button>
            <button onClick={() => setRoom("CreativeRoom")}>
                Battle Room
            </button>
            <button onClick={() => setRoom("CreativeRoom")}>
                Creative Room
            </button>
            <button onClick={() => setRoom("CreativeRoom")}>
                Light Room
            </button>
            <div>
                {room === "DarkRoom" ? (
                    <div>
                        <h2>Bienvenue dans la DarkRoom</h2>
                    </div>
                ):(
                    <div>
                        <h2>Bienvenue dans les rooms</h2>
                    </div>
                )}
            </div>
        </div>
    )
}