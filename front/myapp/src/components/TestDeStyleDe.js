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
        <div className="row">
            <div className="col-lg-6 labelConnection">
                <div className="col-lg-12">
                    <label>Identifiant</label>
                </div>
                <div className="col-lg-12">
                    <label>Mot de passe</label>
                </div>
            </div>
            <div className="col-lg-6 labelConnection">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="skib" {...register("email")} type="email" placeholder="Email" />
                    <input className="skib" {...register("password")} type="password" placeholder="Mot de passe" />
                    <input className="userButton" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default TestDeStyleDe;