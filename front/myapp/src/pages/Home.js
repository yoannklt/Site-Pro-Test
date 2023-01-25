import '../index.css';
import React, { useEffect, useState } from "react";
import Navbarbar from "../components/Navbar"
import Footerter from "../components/Footer"
import { DeleteButton } from '../components/DeleteUser'
import { getAll, signUp } from '../api/Users';
import { useForm } from "react-hook-form";


function Home() {
    const [users, setUsers, count, setCount] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const usersFetched = getAll();
        usersFetched
            .then(result => setUsers(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    const { handleSubmitDe } = useForm();
    const onSubmitDe = (data) => {
        console.log(data)
        //JSON.stringify(data);
        deleteUser(data);  
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        //JSON.stringify(data);
        signUp(data);  
    }
    return <div>
        <Navbarbar />
        <div className='container'>
            <div className="flex">
                {
                    users.map((users, key) => {
                        return <div key={key} className="bloc-users">
                            <h2>{users.first_name} {users.last_name}</h2>
                            <form onSubmit={handleSubmit(onSubmitDe)}>
                                <button type="submit">Supprimer l'utilisateur</button>
                            </form>
                        </div>
                    })
                }
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("first_name")} placeholder="First name" />
            <input {...register("last_name")} placeholder="Last name" />
            <input {...register("email")} type="email" placeholder="@" />
            <input {...register("password")} type="password" placeholder="mdp" />
            <input className="userButton" type="submit"/>
        </form>

        <Footerter />
    </div>
}

export default Home;