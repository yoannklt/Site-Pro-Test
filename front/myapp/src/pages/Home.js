import '../index.css';
import React, { useEffect, useState } from "react";
import Navbarbar from "../components/Navbar"
import Footerter from "../components/Footer"
import { DeleteUser, getAll, signUp } from '../api/Users';
import { createRoom, DeleteRoom, getAllRoom } from '../api/Room';
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button"
import { getAllPage, signUpPage } from '../api/Page';


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

    const [room, setRoom] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
        // récupérer la liste des users seulement au chargement du composant ! 
        const roomFetched = getAllRoom();
        roomFetched
            .then(result => setRoom(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        //JSON.stringify(data);
        signUp(data);
    }
    const onSubmitRoom = (data) => {
        console.log(data)
        createRoom(data);
    }

    const { Register, handleSubmits } = useForm();
    const onSubmitPage = (data) => {
        console.log(data)
        //JSON.stringify(data);
        signUpPage(data);
    }
    
    return <div>
        <Navbarbar />
        <div className='container'>
            <div className="flex">
                {
                    users.map((users, key) => {
                        return <div key={key} className="bloc-users">
                            <h2>{users.first_name} {users.last_name}</h2>
                            
                            <Button onClick={() => DeleteUser(users)}>Supprimer l'utilisateur</Button>
                            
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
            <input className="userButton" type="submit" />
        </form>

        <div className='container'>
            <div className="flex">
                {
                    room.map((room, key) => {
                        return <div key={key} className="bloc-room">
                            <h2>{room.name} </h2>
                            <h2>{room.type}</h2>
                            <Button onClick={() => DeleteRoom(room)}>Supprimer la room</Button>
                        </div>
                    })
                }
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmitRoom)}>
            <input {...register("name")} placeholder="Nom de la room" />
            <input {...register("type")} placeholder="Types de la room" />
            <input {...register("desc")} placeholder="Description de la room" />
            <input {...register("rules")}placeholder="Regle de la room" />
            <input className="userButton" type="submit"/>
        </form>

        <div className='container'>
            <div className="flex">
                {
                    page.map((page, key) => {
                        return <div key={key} className="bloc-page">
                            <h2>{page.title} </h2>
                            <h2>{page.desc}</h2>
                        </div>
                    })
                }
            </div>
        </div>

        <form onSubmit={handleSubmit(onSubmitPage)}>
            <input {...register("name")} placeholder="Nom de la page" />
            <input {...register("title")} placeholder="titre de la page" />
            <input {...register("desc")} placeholder="Description de la page" />
            <input {...register("rules")}placeholder="Regle de la page" />
            <input {...register("img")}placeholder="placer le lien de l'image" />
            <input className="userButton" type="submit"/>
        </form>

        <Footerter />
    </div>
}

export default Home;