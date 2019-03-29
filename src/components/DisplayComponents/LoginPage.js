import React from 'react';
import DriverManager from "../../modules/DriverManager"

class LoginPage extends React.Component {
    //set initial state
    state = {
      email:"",
      password: "",
      type_id:""
    };

    //update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)

    };
    handleTypeChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.id;
        this.setState(stateToChange)

    };

    handleLogin = e => {
        e.preventDefault()
        if (this.state.email && this.state.password && this.state.type_id) {
          DriverManager.searchUP(this.state.email, this.state.password, this.state.type_id).then(
            user => {
              if (!user.length) {
                alert("Wrong email or password!")
              } else {
                sessionStorage.setItem("credentials", parseInt(user[0].id))
                this.props.history.push("/AssignEditLoads")

              }
            }
          )
        } else {
          alert("Please Enter Login Information!")
        }
      }


    render (){
    return (
        <React.Fragment>
            <h3>Account Login</h3>
            <form className="loginForm">

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="email"
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="password"
                    />
                    <br></br>

                    <label>Account Type:</label>
                    <select
                    defaultValue=""
                    name="type_id"
                    id="type_id"
                    onChange={this.handleTypeChange}
                    >
                    <option value="">Select Account Type</option>
                    <option id="1">Driver</option>
                    <option >Dispatcher</option>
            </select>
            <br></br>
                    <button
                    type="submit"
                    onClick= {this.handleLogin}
                    className="submitButtons"
                    >Login</button>

                </div>
            </form>


        </React.Fragment>

    )
    }
}
export default LoginPage