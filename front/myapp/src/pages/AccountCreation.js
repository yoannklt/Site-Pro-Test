import Navbarbar from "../components/Navbar";
import Footerter from '../components/Footer'
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signUp } from "../api/Users";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function AccountCreation() {

    const { register, handleSubmit } = useForm();

    const { user, setUser } = useContext(UserContext);
    const onSubmit = (data) => {
        const userFetched = signUp(data.first_name, data.last_name, data.email, data.password);
        userFetched
            .then(user => {
                console.log(user);
                setUser(user);
            })
            .catch(err => {
                console.log("Failed to sign up");
            })
    }

    return (
        <div>
            <div className="backgroundAccount">
                <Navbarbar />
                <div className="myAccount text-center align-items-center align-self-center">
                    <h1>mon compte</h1>
                </div>
            </div>
            { !user? (
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
                                <Form.Control required {...register("email")} type="mail" placeholder="Password" />
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
                ):(
                    <h2>efeazaf</h2>
                )
            }
            
            <Footerter />
        </div >
    )
}