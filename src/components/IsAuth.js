
import React, { Component } from "react"
import LoginPage from "../components/DisplayComponents/LoginPage"
import UserAccessLayer from "../UserAccessLayer"

class IsAuth extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} />
        ) : (
          <LoginPage {...this.props} />
        )}
      </React.Fragment>
    )
  }
}

export default IsAuth