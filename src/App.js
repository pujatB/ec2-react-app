import "./App.css";
import Home from "./components/Home";
import About from './components/About';
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      
        {/* <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/menu" component={Menu}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch> */}
    
    </div>
  );
}

export default App;
