import React, { Component } from "react"
import Nav from "./nav/Nav"
import ApplicationViews from "./ApplicationViews"
import DriverManager from "../modules/DriverManager"

export default class UserAccessLayer extends Component {
  state = {
    activeUser: {}
  }

  componentDidMount() {
    DriverManager.get(this.activeUserId()).then(activeUser =>
      this.setState({ activeUser: activeUser })
    )
  }
  activeUserId = () => parseInt(sessionStorage.getItem("credentials"))

  render() {
    return (
      <React.Fragment>
        <Nav setAuth={this.props.setAuth} activeUser={this.state.activeUser} />
        <ApplicationViews
          activeUserId={this.activeUserId}
          activeUser={this.state.activeUser}
        />
      </React.Fragment>
    )
  }
}