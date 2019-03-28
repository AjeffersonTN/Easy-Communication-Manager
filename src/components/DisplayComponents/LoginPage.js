import React from 'react';

class LoginPage extends React.Component {
    //set initial state
    state = {
      userEmailLogin:"",
      passwordLogin: ""
    };

    //update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)

    };

    //prevent default
    verifyUserAccount = evt => {
        evt.preventDefault();
        //use object below to see if account is in database if not alert error
        const verifiedAccount ={
            email: this.state.userEmailLogin,
            password: this.state.passwordLogin
        }
        this.props
        .addUser(verifiedAccount)
        .then(() => this.props.history.push("/AssignEditLoads"))


    };

    render (){
    return (
        <React.Fragment>
            <h3>Account Login</h3>
            <form className="loginForm">

                <div>
                    <label htmlFor="userEmailLogin">Email:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="userEmailLogin"
                    />
                </div>

                <div>
                    <label>Password:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="passwordLogin"
                    />
                    <br></br>

                    <button
                    type="submit"
                    onClick= {this.verifyUserAccount}
                    className="submitButtons"
                    >Login</button>

                </div>
            </form>


        </React.Fragment>

    )
    }
}
export default LoginPage