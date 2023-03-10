import '../css/Room.css';
import { RoomContext } from "../context/RoomContext";
import { useContext } from "react";
import Navbarbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import RoomsData from "../RoomsData.json";
import Footerter from "../components/Footer";
import Bandeau from '../components/Bandeau';
import BlocRoom from '../components/BlocRoom';
import Carousel from '../components/Carousel';

export default function Room() {

    const { room, setRoom } = useContext(RoomContext);
    console.log(room);
    return <div className={"sensei-room " + room.theme}>
        <Navbarbar
            theme={room.theme}
        />
        <div className="room-header row align-items-center align-self-center text-center">
            <div className='col-4 img-fluid text-end'>
                <img
                    onClick={room.theme === 'default' ? (() => setRoom(RoomsData.dark)) : room.theme === 'dark' ? (() => setRoom(RoomsData.battle)) : (() => setRoom(RoomsData.light))}
                    className='img-fluid'
                    alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'
                    src={room.theme === 'default' ? ('../img/darkroomFade.png') : room.theme === 'dark' ? ('../img/battleroomWhite.png') : ('../img/lightroom.png')}
                >
                </img>
            </div>
            <div className='col-4 img-fluid text-center'>
                <img
                    onClick={room.theme === 'default' ? (() => setRoom(RoomsData.battle)) : room.theme === 'dark' ? (() => setRoom(RoomsData.creative)) : (() => setRoom(RoomsData.dark))}
                    className='img-fluid'
                    alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'
                    src={room.theme === 'default' ? ('../img/battleroom.png') : room.theme === 'dark' ? ('../img/creativeroomWhite.png') : ('../img/darkroomFade.png')}
                ></img>
            </div>
            <div className='col-4 img-fluid text-start'>
                <img
                    onClick={room.theme === 'default' ? (() => setRoom(RoomsData.creative)) : room.theme === 'dark' ? (() => setRoom(RoomsData.light)) : room.theme === 'battle' ? (() => setRoom(RoomsData.creative)) : (() => setRoom(RoomsData.battle))}
                    src={room.theme === 'default' ? ('../img/creativeroom.png') : room.theme === 'dark' ? ('../img/lightroomWhite.png') : room.theme === 'battle' ? ('../img/creativeroom.png') : ('../img/battleroom.png')}
                    className='img-fluid'
                    alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'></img>
            </div>
            <div className={'col-12 actual-room align-items-center align-self-center text-center ' + room.theme}>
                <img className='img-fluid text-center' src='' alt='TheSense THESENSE The Sense THE SENSE thesense the sense VR vr AR ar Vr Ar Réalité Vitruelle'></img>
            </div>

            <div id="Hero" className="container col col-lg-12 text-center">
                <div className="container discover">
                    <a href="#Hero"><button className="discoverButton">Découvrir</button></a>
                </div>
            </div>
        </div>
        <Bandeau
            theme={room.banner.theme}
            title="Qu'est-ce que la"
            image={room.banner.img}
            logo={room.banner.logo}
            content={room.banner.content}
        />

        {room.theme !== 'creative' ? (
            <div className={'room-content ' + room.theme}>
            <BlocRoom
                theme={room.bloc.theme}
                h1={room.bloc.h1}
                explic={room.bloc.explic}
                img={room.bloc.img}
                name={room.bloc.name}
                room={room.bloc.room}
                tw={room.bloc.tw}
                desc={room.bloc.desc}
                button={room.bloc.button}
                secondTheme={room.secondbloc.theme}
                secondImg={room.secondbloc.img}
                secondName={room.secondbloc.name}
                secondRoom={room.secondbloc.room}
                secondTw={room.secondbloc.tw}
                secondDesc={room.secondbloc.desc}
                secondButton={room.secondbloc.button}
            />

            <Carousel />
        </div>
        ):(
            <div className={'room-content creative row align-items-center align-self-center text-center' + room.theme}>
                <h1>COMING SOON...</h1>
                <Carousel/>
            </div>
            
        )}
        

        <Footerter />
    </div>

}