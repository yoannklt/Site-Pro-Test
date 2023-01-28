import Navbarbar from "../components/Navbar";
import Footerter from '../components/Footer'
import { Button, Form } from "react-bootstrap";

export default function AccountCreation() {
    return (
        <div>
            <div className="backgroundAccount">
                <Navbarbar />
                <div className="myAccount text-center align-items-center align-self-center">
                    <h1>mon compte</h1>
                </div>
            </div>
            <div className="formBackground">
                <div className="text-center row createAccount align-items-center">
                    <h2 className="col-lg-12">Créer un compte</h2>
                </div>
                <div className="formAccount">
                    <Form className="row align-items-baseline topFormAccount">

                        <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end ">
                            <Form.Label>Prénom &nbsp;&nbsp;</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicName">
                            <Form.Control type="text" placeholder="Votre prénom" />
                        </Form.Group>

                        <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end">
                            <Form.Label>Nom &nbsp;&nbsp;</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicLastName">
                            <Form.Control type="text" placeholder="Votre nom" />
                        </Form.Group>
                        
                        <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end">
                            <Form.Label>Email &nbsp;&nbsp;</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicMail">
                            <Form.Control type="mail" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end">
                            <Form.Label>Mot de Passe &nbsp;&nbsp;</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Votre mot de passe" />
                        </Form.Group>
                        
                        <Form.Group className="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-end">
                            <Form.Label>Confirmer le mot de passe &nbsp;&nbsp;</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>

                        <Button className="accountButton col-lg-12" variant="primary" type="submit">
                            Submit
                        </Button>

                        <Form.Group className="mb-3 align-items-center align-self-center" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Se désabonner de la newsletter" />
                        </Form.Group>

                    </Form>
                </div>
            </div>
            <Footerter />
        </div>
    )
}