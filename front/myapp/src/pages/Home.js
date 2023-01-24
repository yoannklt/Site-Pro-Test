import '../index.css';
import React, { useEffect, useState } from "react";
import Navbarbar from "../components/Navbar"
import { getAll } from '../api/Users';


function Home() {
    const [ users, setUsers ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const usersFetched = getAll();
    usersFetched
        .then(result => setUsers(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    
    return <div>
        <Navbarbar />
        <div className='container'>
            <div className="flex">
                {
                    users.map((users,key) =>{
                    return <div key={key} className="bloc-users">
                        <h2>{users.first_name}</h2>
                    </div>
                    })
                }
            </div> 
        </div>
    </div>
}

export default Home;