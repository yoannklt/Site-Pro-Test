import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import BtoB from "./pages/BtoB";
import Room from "./pages/Room";
import Equipements from "./pages/Equipements";
import HomeTest from "./pages/HomeTest";
import AccountCreation from "./pages/AccountCreation";
import { useMemo, useState } from "react";
import { UserContext } from "./context/UserContext";
import { RoomContext } from "./context/RoomContext";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from "./components/Booking";
import RoomsData from "./RoomsData.json";
import Account from "./pages/Account";

//App.js
function App(props){
  
  const [user, setUser] = useState(null);
  const [room, setRoom] = useState(RoomsData.light);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const roomValue = useMemo(() => ({room, setRoom}), [room, setRoom]);

  return <Router>
      <Switch>
        <UserContext.Provider value={value}>
          <RoomContext.Provider value={roomValue}>
            <Route exact path="/"> <Home /></Route>
            <Route exact path="/News"> <News /></Route>
            <Route exact path="/About"> <About /></Route>
            <Route exact path="/BtoB"> <BtoB /></Route>
            <Route exact path="/Equipements"> <Equipements /></Route>
            <Route exact path="/HomeTest"> <HomeTest /></Route>
            <Route exact path="/Account"> <Account/></Route>
            <Route exact path="/Booking"> <Booking/> </Route>
            <Route exact path="/Room"><Room /></Route>
          </RoomContext.Provider>
        </UserContext.Provider>
      </Switch>
  </Router>
}

export default App;