import React from "react";
import ReactDOM from "react-dom";
import Body from "./body";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Favs from "./pages/favs";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Body}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="contact" component={Contact}/>
            <Route path="favs(/:favorite)" component={Favs}/>
        </Route>
    </Router>,
    app);
