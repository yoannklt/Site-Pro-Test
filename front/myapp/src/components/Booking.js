import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addBooking } from "../api/Booking";
import { UserContext } from "../context/UserContext";
import Navbarbar from "../components/Navbar";
import Footerter from "../components/Footer";

export default function Booking() {
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
            <Navbarbar />
                <div className="booking-form align-items-center row">
                    <div className="col-lg-4"></div>
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
                    <div className="col-lg-4">

                    </div>
                </div>        
            <Footerter />
        </div>
    )
}