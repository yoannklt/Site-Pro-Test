import réservation from "../img/réservation.png";

function Reservation() {
    return (
        <div className="reser">

            <div className=" photo">
                <div className="container text-center">



                    <div className="reserimg">
                        <img src={réservation} alt="" />
                    </div>

                    <div className="horraires">
                        <h4>Du 15 au 20 décembre</h4>
                    </div>

                </div>

            </div>

        </div>









    );
}

export default Reservation;