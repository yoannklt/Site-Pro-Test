import { useContext } from "react";
import { Form } from "react-bootstrap";
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
            <Form>
                <Form.Group>
                    <Form.Control type="date" datatype="date"></Form.Control>
                </Form.Group>
            </Form>
        </div>
    )
}