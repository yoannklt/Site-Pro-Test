import Navbarbar from "../components/Navbar";
import Footerter from '../components/Footer'
import { Form } from "react-bootstrap";

export default function AccountCreation() {
    return (
        <div>
            <div className="backgroundAccount">
                <Navbarbar />
                <div className="myAccount text-center">
                    <h1>mon compte</h1>
                </div>
            </div>
            <div className="formBackground">
                <div className="text-center">
                    <h2>Créer un compte</h2>
                </div>
                <div className="row align-items-center">
                    <Form>
                        <Form.Label>
                            Nom
                        </Form.Label>
                        <Form.Control type="text" placeholder="Votre Nom Ici"/>
                    </Form>
                </div>
            </div>
            <Footerter />
        </div>
    )
}