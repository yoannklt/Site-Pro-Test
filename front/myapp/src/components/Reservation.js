import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function reservation() {
    const {user, setUser} = useContext(UserContext);
    userToken = JSON.parse(sessionStorage.getItem('token'));
    if (userToken && !user) {
        setUser(userToken)
    }
}