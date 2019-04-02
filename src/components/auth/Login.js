import React, { Component } from "react"

import UserManager from "../../modules/UserManager"

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            sessionStorage.setItem("type_id", 1)
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            sessionStorage.setItem("type_id", user[0].type_id)
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }
  render() {
    return (
      <React.Fragment>
      <form className="loginForm">
        <h1 className="h3 mb-3 font-weight-normal"> Welcome To Easy Communication Manager (ECM)</h1>
        <h2 className="h3 mb-3 font-weight-normal">Please Sign In</h2>
        <label htmlFor="inputUsername">Username: </label>
        <input
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`Huh!`}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword">Password: </label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`Tell!`}
          required=""
        />
        <button type="submit" onClick={this.handleLogin}>
          Sign In
        </button>
        <button type="submit" onClick={this.handleRegister}>
          Register
        </button>
      </form>
      </React.Fragment>

    )
  }
}
