import React from 'react';

//Need to add in IDs that link to database
class CreateAccount extends React.Component {
    //set intitial state
    state = {
        userFullName:"",
        userEmail:"",
        userPassword:""
    };

    //Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }


    addUserAccount = evt => {
        //prevent defualt form from refreshing
        evt.preventDefault();
        const newUser ={
            fullName: this.state.userFullName,
            email: this.state.userEmail,
            password: this.state.userPassword
        }
        this.props
        .addUser(newUser)
        .then(() => this.props.history.push("/LoginPage"))
        console.log(newUser)
    };
    render (){
    return (
        <React.Fragment>
            <h1>Registration Page</h1>
            <form className="creat-account">

                <div>
                    <label htmlFor="userFullName">Name:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="userFullName"
                    placeholder="First Last" />
                </div>

                <div>
                    <label htmlFor="userEmail">Email:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="userEmail"
                    placeholder="FunnyPigs@gmail.com" />
                </div>

                <div>
                    <label htmlFor="userPassword">Password:</label>
                    <input
                    type="text"
                    required
                    className="create-account-form"
                    onChange={this.handleFieldChange}
                    id="userPassword"
                    placeholder="Password" />
                </div>

                <button
                type="submit"
                onClick={this.addUserAccount}
                className="submitButtons"
                >Request Account</button>
            </form>
        </React.Fragment>
    )
    }
}
export default CreateAccount