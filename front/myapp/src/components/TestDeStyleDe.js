import { useForm } from "react-hook-form";
import { signUp } from "../api/Users";


function TestDeStyleDe() {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        //JSON.stringify(data);
        signUp(data);
    }

    return (
        <div>
            <form className="row fromCoo align-items-center align-self-center" onSubmit={handleSubmit(onSubmit)}>
                <label className="labelLog col-lg-12 oppai">
                    <strong>CONNEXION</strong>
                </label>
                <label className="col-lg-4 text-end">
                    Identifiant&nbsp;&nbsp;
                </label>
                <input className="col-lg-8 pout" {...register("email")} type="email" placeholder="Email" />
                <label className="col-lg-4 text-end">
                    Mot de passe&nbsp;&nbsp;
                </label>
                <input className="col-lg-8 pout" {...register("password")} type="password" placeholder="Mot de passe" />
                <div className="col-lg-12 userButton labelLog">
                    <label>
                        <a href="#" >Créer un compte</a>&nbsp;&nbsp;
                    </label>
                    <input className="fout" type="submit" value="Connexion" />
                </div>
            </form>
        </div>
    );
}

export default TestDeStyleDe;