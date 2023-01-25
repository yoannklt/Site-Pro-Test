import { useForm } from "react-hook-form";
import { deleteUser } from "../api/Users";

export function DeleteButton(){

    const { handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        //JSON.stringify(data);
        deleteUser(data);  
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <button type="submit">Supprimer l'utilisateur</button>
        </form>
    )
}