import React from "react";
import {Link} from "react-router";

export default class Navbar extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="contact">Contact</Link></li>
                    <li><Link to="about">About</Link></li>
                </ul>
            </div>
        );
    }
}