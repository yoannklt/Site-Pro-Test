import '../css/Room.css';
import { RoomContext } from "../context/RoomContext";
import { useContext } from "react";
import Navbarbar from "../components/Navbar";
import { Button, Container } from "react-bootstrap";
import RoomsData from "../RoomsData.json";
import Footerter from "../components/Footer";
import Bandeau from '../components/Bandeau';

export default function RoomTest() {

    const {room, setRoom} = useContext(RoomContext);

    return <div className={"sensei-room " + room.theme}>
        <Navbarbar/>
        <div className="room-header">
            {room.h1}
        </div>
        <Bandeau
            theme = {room.banner.theme}
            title = "Qu'est-ce que la"
            image = {room.banner.img}
            logo = {room.banner.logo}
            content = {room.banner.content}
        />
        <Button onClick={() => setRoom(room.theme === 'default' ? RoomsData.dark : RoomsData.light)}>Change Context</Button>
        <div className="room-content">
            <Container>
        {/* {room.theme == "creative" && <h2>{room.h2}</h2>} */}
            </Container>
        </div>
        <Footerter/>
    </div>
    
}