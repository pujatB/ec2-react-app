import React from "react";
import "./componentsCSS/home.css";
import "./HomeCover";
//import {Animated} from 'react-native';
import Home from "./Home";
import About from './About';
import Menu from "./Menu";
import Contact from "./Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Router>
        <div className="home">
          <div className="heading">
            {/* <Animated.View style={{transform: [{rotate: spin}] }} > */}
            <img
              id="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0h0X_AxqTwq3xMkuHDiKbT2IpahvZ5efgCg&usqp=CAU"
            />
            {/* </Animated.View> */}
            <h1>Thali</h1>
          </div>

          <div className="nav">
            <span className="navButton">
              <NavLink
                className="navLink"
                to="/"
                activeClassName="selected"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  color: "blue",
                  textDecoration: "none",
                }}
              >
                Home
              </NavLink>
            </span>

            <span className="navButton">
              <NavLink
                className="navLink"
                to="/about"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  color: "blue",
                  textDecoration: "none",
                }}
              >
                About
              </NavLink>
            </span>

            <span className="navButton">
              <NavLink
                className="navLink"
                to="/menu"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  color: "blue",
                  textDecoration: "none",
                }}
              >
                Menu
              </NavLink>
            </span>

            <span className="navButton">
              <NavLink
                className="navLink"
                to="/contact"
                activeStyle={{
                  fontWeight: "bold",
                  fontSize: "1.1em",
                  color: "blue",
                  textDecoration: "none",
                }}
              >
                Contact
              </NavLink>
            </span>
          </div>
        </div>
        
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/menu" component={Menu}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Nav;
