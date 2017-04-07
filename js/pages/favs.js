import React from "react";
import {Serena, Nadal, Venus, Unknown} from "./favs/tennis";

export default class Favs extends React.Component {
    render(){
        const {favorite} = this.props.params;
        switch (favorite){
            case "serena":
                return (<Serena/>);
            case "venus":
                return (<Venus/>);
            case "nadal":
                return (<Nadal/>);
            default:
                return(<Unknown/>);
        }
    }
}