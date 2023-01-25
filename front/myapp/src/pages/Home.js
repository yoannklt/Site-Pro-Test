import '../index.css';
import React, { useEffect, useState } from "react";
import Navbarbar from "../components/Navbar"
import Footerter from "../components/Footer"
import { getAll } from '../api/Users';
import { useForm } from "react-hook-form";


function Home() {
    const [users, setUsers] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const usersFetched = getAll();
        usersFetched
            .then(result => setUsers(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
        //On peut transformer les données en JSON pour les envoyer dans notre appel
        //JSON.stringify(data);
    }
    return <div>
        <Navbarbar />
        <div className='container'>
            <div className="flex">
                {
                    users.map((users, key) => {
                        return <div key={key} className="bloc-users">
                            <h2>{users.first_name} {users.last_name}</h2>
                        </div>
                    })
                }
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} placeholder="First name" />
            <input {...register("lastName")} placeholder="First name" />
            <input {...register("mail")} type="mail" placeholder="First name" />
            <input {...register("password")} type="password" placeholder="First name" />
            <button type="submit">Valider</button>
        </form>

        <Footerter />
    </div>
}

export default Home;