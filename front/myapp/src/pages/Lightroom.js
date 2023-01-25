import '../index.css';
import React, { useEffect, useState } from "react";
import Navbarbar from "../components/Navbar"
import Footerter from "../components/Footer"
import { getAll, signUp } from '../api/Room';
import { useForm } from "react-hook-form";

function Lightroom() {
    const [room, setRoom] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const roomFetched = getAll();
        roomFetched
            .then(result => setUsers(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);


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
                    room.map((room, key) => {
                        return <div key={key} className="bloc-room">
                            <h2>{room.name} {room.type}</h2>
                        </div>
                    })
                }
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("nom")} placeholder="Nom de la room" />
            <input {...register("type")} placeholder="Types de la room" />
            <input {...register("description")} placeholder="Description de la room" />
            <input {...register("rules")}placeholder="Regle de la room" />
            <input className="userButton" type="submit"/>
        </form>

        <Footerter />
    </div>
}

export default Lightroom;