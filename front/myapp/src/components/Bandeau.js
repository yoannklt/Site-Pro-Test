import '../css/Bandeau.css';



function Bandeau(props) {
    return (
        <div className="row bandeau">
            <div className="col-lg-4 img text-center">
                <img className="img-fluid imground align-self-center" src={props.image} alt="The Sense VR AR THESENSE TheSense"></img>
            </div>
            <div className="col-lg-7 row align-items-center textbottom">
                <h3 className="">{props.title}
                    <img className="img-fluid logoHome text-start" src={props.logo} alt="The Sense VR AR THESENSE TheSense" />
                    &nbsp;?
                </h3>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Bandeau;