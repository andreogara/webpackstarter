import React from "react";
import Header from "./header";
import Navbar from "./navbar";


export default class Body extends React.Component {
    constructor(){
        super();
        this.state = {
            time: 0
        };
        this.navigate = this.navigate.bind(this);
    };

    navigate(){
        this.props.history.replaceState(null, "/");
    }
    render(){
        return (
            <div>
                <Header time={this.state.time} navigate={this.navigate}/>
                <Navbar/>
                {this.props.children}
            </div>
        );
    }
}