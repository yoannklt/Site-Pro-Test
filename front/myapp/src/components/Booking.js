import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addBooking } from "../api/Booking";
import { UserContext } from "../context/UserContext";

function BookingReady() {
    const { user, setUser } = useContext(UserContext);
    const userToken = JSON.parse(sessionStorage.getItem('token'))
    if (userToken && !user) {
        setUser(userToken);
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        addBooking(data.date, data.begin, data.first_name, data.last_name, data.phoneNumber, data.players, data.discover, data.code);
        console.log(data)
    }

    return (
        <div>

            <form className="container nwar mt-5 pt-3" onSubmit={handleSubmit(onSubmit)}>

                <div className="text-center">
                    <h2 className="mt-3"><strong>Votre réservation est prête !</strong></h2>
                    <h3>Il ne reste plus qu'à valider !</h3>
                </div>

                <div className="row blocbooking text-center">
                    <div className="col-lg-4 align-self-center">
                        <h4>Du 18 au 19 décembre</h4>
                        <div className="horaires">
                            <div className="day1 align-self-center">
                                <p className="redday">Vendredi 17 fév.</p>
                                <div className="col">
                                    {['10h20', '11h50', '13h50', '14h50', '15h50', '16h50', '17h50', '18h50', '19h50', '20h50', '21h50', '22h50', '23h50'].map((type) => (
                                        <div key={type} className="checkbox">
                                            <input type="radio" id={type} {...register('date')} name="contact" value={type} />
                                            <label>{type}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="day2 align-self-center">
                                <p className="redday">Samedi 18 fév.</p>
                                <div className="col">
                                    {['10h20', '11h50', '13h50', '14h50', '15h50', '16h50', '17h50', '18h50', '19h50', '20h50', '21h50', '22h50', '23h50'].map((type) => (
                                        <div key={type} className="checkbox">
                                            <input type="radio" id={type} {...register('date')} name="contact" value={type} />
                                            <label>{type}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="booking-form col col-lg-6 align-items-center text-center row">
                        <div className="row align-items-center text-center">
                            <input className="col-lg-5 txt-input" {...register('date')} required placeholder="Jour"></input>
                            <input className="col-lg-5 offset-lg-2 txt-input" {...register('begin')} required placeholder="Créneau"></input>
                            {!user ? (
                                <>
                                    <input className="col-lg-5 txt-input" {...register('first_name')} required type="text" placeholder="Prénom"></input>
                                    <input className="col-lg-5 offset-lg-2 txt-input" {...register('last_name')} required type="text" placeholder="Nom"></input>
                                    <input className="col-lg-5 txt-input"{...register('phoneNumber')} required type="tel" pattern="[0-9]{10}" placeholder="Numéro de téléphone"></input>
                                    <input className="col-lg-5 offset-lg-2 txt-input" {...register('email')} required type="text" placeholder="Email"></input>
                                </>
                            ) : (
                                <>
                                    <input className="col-lg-5 txt-input" {...register('first_name')} required type="text" placeholder="Prénom" defaultValue={user.first_name}></input>
                                    <input className="col-lg-5 offset-lg-2 txt-input" {...register('last_name')} required type="text" placeholder="Nom" defaultValue={user.last_name}></input>
                                    <input className="col-lg-5 txt-input" {...register('phoneNumber')} required type="tel" pattern="[0-9]{10}" placeholder="Numéro de téléphone" defaultValue={user.phoneNumber}></input>
                                    <input className="col-lg-5 offset-lg-2 txt-input" {...register('email')} required type="text" placeholder="Email" defaultValue={user.email}></input>
                                </>
                            )}
                            <input className="col-lg-5 txt-input" {...register('players')} required type="number" min={1} max={4} placeholder="Nbre de joueurs"></input>
                            <input className="col-lg-5 offset-lg-2 txt-input" {...register('discover')} type='text' placeholder="Comment avez vous découvert The Sense ?"></input>
                            <input className="col-lg-12 txt-input" {...register('code')} placeholder="Code promo"></input>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-3 pb-3">
                        <Button type='submit'>Réserver</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BookingReady;