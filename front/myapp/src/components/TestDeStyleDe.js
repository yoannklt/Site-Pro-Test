import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logIn } from "../api/Users";
import { Button, Form } from 'react-bootstrap/'


function TestDeStyleDe() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        //JSON.stringify(data);
        logIn(data);
    }

    return (
        <div>
            {/* { !userLogin ? ( */}
                <Form className="row fromCoo align-items-center align-self-center" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label className="labelLog col-lg-12 oppai">
                        <strong>CONNEXION</strong>
                    </Form.Label>
                    <Form.Label className="col-lg-6 text-end">
                        Identifiant&nbsp;&nbsp;
                    </Form.Label>
                    <Form.Control className="col-lg-6 pout" {...register("email")} type="email" placeholder="Email" />
                    <Form.Label className="col-lg-6 text-end">
                        Mot de passe&nbsp;&nbsp;
                    </Form.Label>
                    <Form.Control className="col-lg-6 pout" {...register("password")} type="password" placeholder="Mot de passe" />
                    <div className="col-lg-12 userButton labelLog">
                        <Form.Label>
                            <Link to="" >Créer un compte</Link>&nbsp;&nbsp;
                        </Form.Label>
                        <Form.Control className="fout" type="submit" value="Connexion" />
                    </div>
                </Form>
            {/* ):( */}
                {/* <Form className="row fromCoo align-items-center align-self-center" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Label className="labelLog col-lg-12 oppai">
                        <strong>CONNEXION</strong>
                    </Form.Label>
                    <Form.Label className="col-lg-4 text-end">
                        Identifiant&nbsp;&nbsp;
                    </Form.Label>
                    <Form.Input className="col-lg-8 pout" {...register("email")} type="email" placeholder="Email" />
                    <Form.Label className="col-lg-4 text-end">
                        Mot de passe&nbsp;&nbsp;
                    </Form.Label>
                    <Form.Input className="col-lg-8 pout" {...register("password")} type="password" placeholder="Mot de passe" />
                    <div className="col-lg-12 userButton labelLog">
                        <Form.Label>
                            <Link to="" >Créer un compte</Link>&nbsp;&nbsp;
                        </Form.Label>
                        <Form.Input className="fout" type="submit" value="Connexion" />
                    </div>
                </Form>
            )
        } */}
            
        </div>
    );
}

export default TestDeStyleDe;