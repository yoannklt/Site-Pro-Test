import '../css/AccountCreation.css';
import Navbarbar from "../components/Navbar";
import Footerter from '../components/Footer';
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { existingUser, signUp } from "../api/Users";

export default function AccountCreation() {

    const { register, handleSubmit } = useForm();   
   

    const onSubmit = (data) => {
        const existFetched = existingUser(data.email);
        existFetched
            .then(result =>{
                console.log(result)
                if(result) {
                    console.log("There is already an account using this email: " + data.email)
                    return;
                }
                console.log("New account created: " + data.email)
                signUp(data.first_name, data.last_name, data.email, data.password)
            })
    }

    return (
        <div>
            <div className="backgroundAccount">
                <Navbarbar/>
                <div className="myAccount text-center align-items-center align-self-center">
                    <h1><strong>mon compte</strong></h1>
                </div>
            </div>
                <div className="formBackground">
                    <div className="text-center row createAccount align-items-center">
                        <h2 className="col-lg-12">Créer un compte</h2>
                    </div>
                    <div className="formAccount">
                        <Form className="row align-items-baseline topFormAccount" onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end ">
                                <Form.Label>Prénom &nbsp;&nbsp;</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicName">
                                <Form.Control required {...register("first_name")} type="text" placeholder="Votre prénom" />
                            </Form.Group>

                            <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end">
                                <Form.Label>Nom &nbsp;&nbsp;</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicLastName">
                                <Form.Control required {...register("last_name")} type="text" placeholder="Votre nom" />
                            </Form.Group>
                            
                            <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end">
                                <Form.Label>Email &nbsp;&nbsp;</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicMail">
                                <Form.Control required {...register("email")} type="mail" placeholder="Votre adresse mail" />
                            </Form.Group>

                            <Form.Group className="col-lg-5 col-md-5 col-sm-5 text-end">
                                <Form.Label>Mot de Passe &nbsp;&nbsp;</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7 formCreateAccount" controlId="formBasicPassword">
                                <Form.Control required {...register("password")} type="password" placeholder="Votre mot de passe" />
                            </Form.Group>
                            
                            <Form.Group className="col-lg-5 col-md-5 col-sm-5 col-xs-5 text-end">
                                <Form.Label>Confirmer le mot de passe &nbsp;&nbsp;</Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-7 formCreateAccount">
                                <Form.Control type="password" />
                            </Form.Group>

                            <Form.Group className="col-lg-12 text-center">
                                <Button className="accountButton" variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>    
                            
                            <Form.Group className="col-lg-12 text-center mb-3 align-items-center align-self-center" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Se désabonner de la newsletter" />
                            </Form.Group>

                        </Form>
                    </div>
                </div>
            <Footerter/>
        </div >
    )
}