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
            <div className="col-lg-4 row">
                <label className="labelLog col-lg-12">
                    Email : 
                </label>
                <label className="labelLog col-lg-12">
                    Mot de passe : 
                </label>
                <div className="labelLog col-lg-12">
                
                </div>
            </div>
            <div className="col-lg-8">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                    <input className="col-lg-12 skib" {...register("email")} type="email" placeholder="Email" />
                    <input className="col-lg-12 skib" {...register("password")} type="password" placeholder="Mot de passe" />
                    <input className="col-lg-2 userButton skib" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default TestDeStyleDe;