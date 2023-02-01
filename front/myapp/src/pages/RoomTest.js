import '../css/Room.css';
import { RoomContext } from "../context/RoomContext";
import { useContext } from "react";
import Navbarbar from "../components/Navbar";
import { Button, Container } from "react-bootstrap";
import RoomsData from "../RoomsData.json";
import Footerter from "../components/Footer";
import Bandeau from '../components/Bandeau';
import BlocRoom from '../components/BlocRoom';

export default function RoomTest() {

    const {room, setRoom} = useContext(RoomContext);

    return <div className={"sensei-room " + room.theme}>
        <Navbarbar/>
        <div className="room-header row align-items-center align-self-center text-center">
                <div className='col-4 img-fluid text-end'>
                    <img
                     onClick={room.theme === 'default' ? (() => setRoom(RoomsData.dark)) : room.theme === 'dark' ? (() => setRoom(RoomsData.battle)) : (() => setRoom(RoomsData.light))} 
                     className='img-fluid' 
                     alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'
                     src={room.theme === 'default' ? ('../img/darkroomBlack.png') : room.theme === 'dark' ? ('../img/battleroom.png'):('../img/lightroom.png')}
                     >
                     </img>
                </div>
                <div className='col-4 img-fluid text-center'>
                    <img 
                     onClick={room.theme === 'default' ? (() => setRoom(RoomsData.battle)) : room.theme === 'dark' ? (() => setRoom(RoomsData.creative)) : (() => setRoom(RoomsData.dark))} 
                     className='img-fluid' 
                     alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'
                     src={room.theme === 'default' ? ('../img/battleroom.png'): room.theme === 'dark' ? ('../img/creativeroom.png'): ('../img/darkroomBlack.png')}
                     ></img>
                </div>
                <div className='col-4 img-fluid text-start'>
                    <img  
                     onClick={room.theme === 'default' ? (() => setRoom(RoomsData.creative)) : room.theme === 'dark' ? (() => setRoom(RoomsData.light)) :room.theme === 'battle' ?(() => setRoom(RoomsData.creative)): (() => setRoom(RoomsData.battle))}
                     src={room.theme === 'default' ? ('../img/creativeroom.png'): room.theme === 'dark' ? ('../img/lightroom.png'):room.theme === 'battle' ? ('../img/creativeroom.png'):('../img/battleroom.png')}
                     className='img-fluid' 
                     alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'></img>
                </div>
        </div>
        <Bandeau
            theme = {room.banner.theme}
            title = "Qu'est-ce que la"
            image = {room.banner.img}
            logo = {room.banner.logo}
            content = {room.banner.content}
        />
        <Button onClick={() => setRoom(room.theme === 'default' ? RoomsData.dark : RoomsData.light)}>Change Context</Button>
        <BlocRoom
            theme = {room.bloc.theme}
            img = {room.bloc.img}
            name = {room.bloc.name}
            room = {room.bloc.room}
            description = {room.bloc.description}
            button = {room.bloc.button}
        />
        <div className="room-content">
            <Container> 
            {/* {room.theme == "creative" && <h2>{room.h2}</h2>} */}
            </Container>
        </div>
        <Footerter/>
    </div>
    
}