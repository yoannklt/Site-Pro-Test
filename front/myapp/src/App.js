import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//App.js
function App(props){
  return <Router>
      <Routes>
        <Route exact path="/"> 
          <Home /> 
        </Route>
      </Routes>
  </Router>
}

export default App;