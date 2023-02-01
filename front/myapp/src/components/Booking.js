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

            <div className="container nwar">

                <div className="text-center">
                    <h2><strong>Votre réservation est prête !</strong></h2>
                    <h3>Il ne reste plus qu'à valider !</h3>
                </div>

                <div className="row blocbooking text-center">
                    <div className="col col-lg-6 align-self-center">
                        <h4>Du 18 au 19 décembre</h4>
                        <div className="horaires">
                            <div className="day1 align-self-center">
                                <p className="redday">Vendredi 18dec.</p>
                                <Form className="col col-lg-2">
                                    {['radio'].map((type) => (
                                        <div key={type} className="mb-3">
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>10h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>11h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>13h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>14h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>16h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>17h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>19h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>20h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>22h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>23h50</p></Form.Check.Label>
                                        </div>
                                    ))}
                                </Form>
                            </div>
                            <div className="day2 text-center">
                                <p className="redday">Vendredi 19dec.</p>
                                <Form className="col col-lg-2">
                                    {['radio'].map((type) => (
                                        <div key={type} className="mb-3">
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>10h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>11h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>13h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>14h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>16h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>17h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>19h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>20h50</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>22h20</p></Form.Check.Label>
                                            <Form.Check.Input type={type} isValid />
                                            <Form.Check.Label><p>23h50</p></Form.Check.Label>
                                        </div>
                                    ))}
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="booking-form col col-lg-6 align-items-center row">
                        <Form onSubmit={handleSubmit(onSubmit)} className="col-lg-4 text-center">
                            <Form.Group className="mb-2">
                                <Form.Control className="mb-2" {...register('date')} required placeholder="Jour"></Form.Control>
                                <Form.Control className="mb-2" {...register('begin')} required placeholder="Créneau"></Form.Control>
                                {!user ? (
                                    <>
                                        <Form.Control className="mb-2" {...register('first_name')} required type="text" placeholder="Prénom"></Form.Control>
                                        <Form.Control className="mb-2" {...register('last_name')} required type="text" placeholder="Nom"></Form.Control>
                                        <Form.Control className="mb-2"{...register('phoneNumber')} required type="tel" pattern="[0-9]{10}" placeholder="Numéro de téléphone"></Form.Control>
                                        <Form.Control className="mb-2" {...register('email')} required type="text" placeholder="Email"></Form.Control>
                                    </>
                                ) : (
                                    <>
                                        <Form.Control className="mb-2" {...register('first_name')} required type="text" placeholder="Prénom" defaultValue={user.first_name}></Form.Control>
                                        <Form.Control className="mb-2" {...register('last_name')} required type="text" placeholder="Nom" defaultValue={user.last_name}></Form.Control>
                                        <Form.Control className="mb-2" {...register('phoneNumber')} required type="tel" pattern="[0-9]{10}" placeholder="Numéro de téléphone" defaultValue={user.phoneNumber}></Form.Control>
                                        <Form.Control className="mb-2" {...register('email')} required type="text" placeholder="Email" defaultValue={user.email}></Form.Control>
                                    </>
                                )}
                                <Form.Control className="mb-2" {...register('players')} required type="number" min={1} max={4} placeholder="Nbre de joueurs"></Form.Control>
                                <Form.Control className="mb-2" {...register('discover')} type='text' placeholder="Comment avez vous découvert The Sense ?"></Form.Control>
                                <Form.Control className="mb-2" {...register('code')} placeholder="Code promo"></Form.Control>
                            </Form.Group>
                            <Button type='submit'>Envoyer</Button>
                        </Form>
                    </div>
                </div>

            </div>
        
        </div>
    )
}

export default BookingReady;