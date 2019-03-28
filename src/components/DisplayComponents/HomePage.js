import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews";
import NavBar from "../NavBar";




class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default HomePage