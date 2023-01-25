import "./index.css";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import BtoB from "./pages/BtoB";
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
        <Route exact path="/"> {/*ici on met l'URL dans le navigateur*/}
          <Home /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/News"> {/*ici on met l'URL dans le navigateur*/}
          <News /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/About"> {/*ici on met l'URL dans le navigateur*/}
          <About /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/BtoB"> {/*ici on met l'URL dans le navigateur*/}
          <BtoB /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/Lightroom"> {/*ici on met l'URL dans le navigateur*/}
          <Lightroom /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/Darkroom"> {/*ici on met l'URL dans le navigateur*/}
          <Darkroom /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/Equipements"> {/*ici on met l'URL dans le navigateur*/}
          <Equipements /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/Creativeroom"> {/*ici on met l'URL dans le navigateur*/}
          <Creativeroom /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
        <Route exact path="/Battleroom"> {/*ici on met l'URL dans le navigateur*/}
          <Battleroom /> {/*ici on donne la page à afficher en fonction de cette URL*/}
        </Route>
      </Switch>
  </Router>
}

export default App;