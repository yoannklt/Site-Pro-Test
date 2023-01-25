import "./index.css";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Btob from "./pages/BtoB";
import Lightroom from "./pages/Lightroom";
import Darkroom from "./pages/Darkroom";
import Equipements from "./pages/Equipements";
import Creativeroom from "./pages/Creativeroom";
import Battleroom from "./pages/Battleroom";
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
        <Route exact path="/Btob"> 
          <Btob /> 
        </Route>
        <Route exact path="/Lightroom"> 
          <Lightroom /> 
        </Route>
        <Route exact path="/Darkroom"> 
          <Darkroom /> 
        </Route>
        <Route exact path="/Equipements"> 
          <Equipements /> 
        </Route>
        <Route exact path="/Creativeroom"> 
          <Creativeroom /> 
        </Route>
        <Route exact path="/Battleroom"> 
          <Battleroom /> 
        </Route>
      </Switch>
  </Router>
}

export default App;