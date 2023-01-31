import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { logIn } from "../api/Users";
import { Form } from 'react-bootstrap/'
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function FormConnexion(props) {
    const { register, handleSubmit } = useForm();
    
    const { user, setUser } = useContext(UserContext);
    const onSubmit = (data) => {
          const userFetched = logIn(data.email, data.password);
          userFetched
            .then(user => {
              setUser(user);
              sessionStorage.setItem('token', JSON.stringify(user));
            })
            .catch(err => {
              console.log("Failed to login");
            })
            
        }
    

    return (
        <div>
            { !user ? ( 
            <Form className=" fromCoo row align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <Form.Label className="labelLog oppai">
                    <h2>Connexion</h2>
                </Form.Label>
                <Form.Label className="col-lg-3 text-end">
                    Identifiant&nbsp;&nbsp;
                </Form.Label>
                <Form.Control required className="col-lg-9 pout" {...register("email")} type="email" placeholder="Email" />
                <Form.Label className="col-lg-3 text-end">
                    Mot de passe&nbsp;&nbsp;
                </Form.Label>
                <Form.Control className="col-lg-9 pout" {...register("password")} type="password" placeholder="Mot de passe" />
                <div className=" userButton labelLog row align-items-center">
                    <Form.Label className="col-lg-9">
                        <Link to="/AccountCreation" className="" >Créer un compte</Link>&nbsp;&nbsp;
                    </Form.Label>
                    <Form.Control required className="fout text-end" type="submit" value="Connexion" />
                </div>
            </Form>
            ):null
        } 

        </div>
    );
}



export default FormConnexion;