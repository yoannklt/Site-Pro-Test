import "./index.css";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Btob from "./pages/BtoB";
import Room from "./pages/Room";
import Equipements from "./pages/Equipements";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Switch>
        <Route exact path="/"> 
          <Home /> 
        </Route>
        <Route exact path="/News"> 
          <News /> 
        </Route>
        <Route exact path="/About"> 
          <About /> 
        </Route>
        <Route exact path="/BtoB"> 
          <Btob /> 
        </Route>
        <Route exact path="/Room"> 
          <Room /> 
        </Route>
        <Route exact path="/Equipements"> 
          <Equipements /> 
        </Route>
      </Switch>
  </Router>
}

export default App;