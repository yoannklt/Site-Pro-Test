import '../css/Room.css';
import { RoomContext } from "../context/RoomContext";
import { useContext } from "react";
import Navbarbar from "../components/Navbar";
import Creativeroom from "../components/Creativeroom";
import { Button, Container } from "react-bootstrap";
import RoomsData from "../RoomsData.json";
import Footerter from "../components/Footer";

export default function RoomTest() {

    const {room, setRoom} = useContext(RoomContext);
    console.log(room.theme);
    return <div className={"sensei-room " + room.theme}>
        <Navbarbar/>
        <div className="room-header">
            {room.h1}
        </div>
        {/* BANNIERE QUAND TU AURAS FINI */}
        <Button onClick={() => setRoom(room.theme == 'default' ? RoomsData.dark : RoomsData.light)}>Change Context</Button>
        <div className="room-content">
            <Container>
{room.theme == "creative" && <h2>{room.h2}</h2>}
            </Container>
        </div>
        <Footerter/>
    </div>
    
}