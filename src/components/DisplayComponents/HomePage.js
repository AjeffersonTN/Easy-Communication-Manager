import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
import Nav from "../Nav";
import "../../index.css"




class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default HomePage