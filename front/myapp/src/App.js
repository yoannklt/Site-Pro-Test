import Home from "./pages/Home";
import DisplayPokedex from "./pages/DisplayPokedex";
import AllPokemons from "./pages/AllPokemons";
import PannelAdmin from "./pages/PannelAdmin"
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
        <Route path="/Pokedex">
          <DisplayPokedex />
        </Route>
        <Route path="/Pokemons">
          <AllPokemons />
        </Route>
        <Route path="/PannelAdmin">
          <PannelAdmin/>
        </Route>
      </Switch>
  </Router>
}

export default App;