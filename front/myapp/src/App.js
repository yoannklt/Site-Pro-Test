import "./css/index.css";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import BtoB from "./pages/BtoB";
import Room from "./pages/Room";
import Equipements from "./pages/Equipements";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomeTest from "./pages/HomeTest";
import AccountCreation from "./pages/AccountCreation";
import { useMemo, useState } from "react";
import { UserContext } from "./context/UserContext";

//App.js
function App(props){

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <Router>
      <Switch>
        <UserContext.Provider value={value}>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/News"> <News /> </Route>
          <Route exact path="/About"> <About /> </Route>
          <Route exact path="/BtoB"> <BtoB /> </Route>
          <Route exact path="/Room"> 
            <Room /> 
          </Route>
          <Route exact path="/Equipements"> 
            <Equipements /> 
          </Route>
          <Route exact path="/HomeTest"> 
            <HomeTest /> 
          </Route>
          <Route exact path="/AccountCreation"> 
            <AccountCreation /> 
          </Route>
        </UserContext.Provider>
      </Switch>
  </Router>
}

export default App;