import React from "react";

export default class Header extends React.Component{
    render(){
        return (
          <div className="jumbotron">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
              <button onClick={this.props.navigate}>Surprise</button>
              <h1>Welcome to My Page</h1>
          </div>
        );
    }
}