import React from 'react';


class HomePage extends React.Component {


    render () {
    return (
        <section>

        <div>
            <h1>Welcome To ECM</h1>

                <button onClick= {() => {
                    this.props.history.push("/LoginPage")}}>
                   Login
                    </button>
            </div>
            <br></br>
            <div>


                <button onClick= {() => {
                    this.props.history.push("/CreateAccount")}}>Create Account</button>

        </div>
        </section>
    )
    }
}
export default HomePage