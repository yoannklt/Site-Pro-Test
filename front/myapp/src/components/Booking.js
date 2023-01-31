import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { addBooking } from "../api/Booking";
import { UserContext } from "../context/UserContext";

export default function Booking() {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        addBooking(data);
        console.log(data)
    }

    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control {...register('date')} required placeholder="Jour"></Form.Control>
                    <Form.Control {...register('begin')} required placeholder="Créneau"></Form.Control>
                    <Form.Control {...register('first_name')} required type="text" placeholder="Prénom"></Form.Control>
                    <Form.Control {...register('last_name')} required type="text" placeholder="Nom"></Form.Control>
                    <Form.Control {...register('phoneNumber')} required type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" placeholder="Numéro de téléphone"></Form.Control>
                    <Form.Control {...register('players')} required type="number" min={1} max={4} placeholder="Nbre de joueurs"></Form.Control>
                    <Form.Control {...register('discover')} type='text' value={null} placeholder="Comment avez vous découvert The Sense ?"></Form.Control>
                    <Form.Control {...register('code')} placeholder="Code promo"></Form.Control>
                </Form.Group>
                <Button type='submit'>Envoyer</Button>
            </Form>
        </div>
    )
}