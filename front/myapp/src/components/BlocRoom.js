import "../css/Room.css";

function BlocRoom(props) {
    return (
        <div className={"container col col-lg-12 " + props.theme}>
            <div className="container blocimg">
                <div>
                    <img className="img-fluid" src={props.img} alt="the sense" />
                </div>
            </div>
            <div className="container blocgris">
                <div className="container blochome">
                    <h3><strong>{props.name}</strong></h3>
                    <h3>|</h3>
                    <h3 className="title">{props.room}</h3>
                </div>
                <div className="row parag">
                    <p>{props.desc}</p>
                </div>
                <div className="row reservebtn text-center">
                    <div className="clc col-lg-12 align-self-center">
                        <a href="/Room"><img src={props.button} alt="the sense" /></a>
                    </div>
                </div>
            </div>

            <div className="container blocimg">
                <div>
                    <img className="img-fluid" src={props.secondImg} alt="the sense" />
                </div>
            </div>
            <div className="container bloclight">
                <div className="blochome">
                    <h3><strong>{props.secondName}</strong></h3>
                    <h3>|</h3>
                    <h3 className="title">{props.secondRoom}</h3>
                </div>
                <div className="row parag">
                    <p>{props.secondDesc}</p>
                </div>
                <div className="row reservebtn text-center">
                    <div className="clc col-lg-12 align-self-center">
                        <a href="/Room"><img src={props.secondButton} alt="the sense" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlocRoom;