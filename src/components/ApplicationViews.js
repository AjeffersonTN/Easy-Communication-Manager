import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'

import NewHome from "./DisplayComponents/NewHome"
import AssignEditLoads from "./DisplayComponents/AssignEditLoads"
import CreateAccount from "./DisplayComponents/CreateAccount"
import DispatcherPage from "./DisplayComponents/DispatcherPage"
import DriversConfirmationPage from "./DisplayComponents/DriversConfirmationPage"
import EditLoad from "./DisplayComponents/EditLoad"
import LoginPage from "./DisplayComponents/LoginPage"
import ViewAllLoadsDispatcher from "./DisplayComponents/ViewAllLoadsDispatcher"
import ViewAllLoadsDriver from "./DisplayComponents/ViewAllLoadsDriver"

import DriverManager from "../modules/DriverManager"
import LoadManager from "../modules/LoadManager"

class ApplicationViews extends Component {
    state = {
        users: [],
        types: [],
        loads: []
    }

    addLoad = newLoad => {
        return LoadManager.addLoad(newLoad)
        .then(() => LoadManager.getAllLoads())
        .then(loads =>
            this.setState({
                loads: loads
            })
            )
        }
    getAllLoads = () =>
            LoadManager.getAllLoads().then(loads => this.setState({ loads: loads }))
    getLoad = (id) =>
        LoadManager.get(id)
            .then(LoadManager.getAllLoads)
            .then(loads => this.setState({ loads: loads }))

    deleteLoad = (id) =>
        LoadManager.deleteLoad(id)
            .then(LoadManager.getAllLoads)
            .then(loads => this.setState({ loads: loads }))


    updateLoad = (load) => {
        return LoadManager.updateLoad(load)
            .then(() => LoadManager.getAllLoads())
            .then(loads =>
                this.setState({
                    loads: loads
                })
            )
    }

    addUser = newUser => {
        return DriverManager.addUser(newUser)
            .then(() => DriverManager.getAllUsers())
            .then(users =>
                this.setState({
                    users: users
                })
            )
    }
    getUser = (id) =>
    DriverManager.get(id)
            .then(DriverManager.getAllUsers)
            .then(users => this.setState({ users: users }))

    deleteUser = (id) =>
    DriverManager.delete(id)
            .then(DriverManager.getAllUsers)
            .then(users => this.setState({ users: users }))

    getAllUsers = () =>
    DriverManager.getAllUsers().then(users => this.setState({ users: users }))

    componentDidMount() {
        const newState = {}

        LoadManager.getAllLoads()
            .then(loads => newState.loads = loads)
            .then(() => this.setState(newState))
        DriverManager.getAllUsers()
            .then(users => newState.users = users)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>

                <Route exact path="/CreateAccount" render={(props) => {
                    return <CreateAccount
                                {...props}
                                addUser={this.addUser}
                                users={this.state.users}/>
                }} />
                <Route exact path="/AssignEditLoads" render={(props) => {
                    return <AssignEditLoads
                                {...props}
                                addLoad={this.addLoad}
                                getAllLoads={this.getAllLoads}
                                getAllUsers={this.getAllUsers}
                                users={this.state.users}
                                />
                }} />
                <Route exact path="/DispatcherPage" render={() => {
                    return <DispatcherPage />
                }} />
                <Route exact path="/DriversConfirmationPage" render={() => {
                    return <DriversConfirmationPage />
                }} />
                <Route exact path="/LoginPage" render={(props) => {
                    return <LoginPage
                    {...props}
                                addUser={this.addUser}
                                users={this.state.users} />
                }} />
                <Route exact path="/" render={(props) => {
                    return <NewHome
                    {...props}
                                addLoad={this.addLoad}
                                getAllLoads={this.getAllLoads}
                                getAllUsers={this.getAllUsers}
                                users={this.state.users}

                     />
                }} />
                <Route exact path="/ViewAllLoadsDispatcher" render={(props) => {
                    return <ViewAllLoadsDispatcher
                    deleteLoad={this.deleteLoad}
                                 getAllLoads={this.getAllLoads}
                                 loads={this.state.loads}
                                 {...props} />
                }} />
                {/* <Route exact path="/ViewAllLoadsDispatcher/:loadId(\d+)" render={(props) => {
                    return <ViewAllLoadsDispatcher
                    deleteLoad={this.deleteLoad}
                                 getAllLoads={this.getAllLoads}
                                 loads={this.state.loads}
                                 {...props} />
                }} /> */}
                <Route exact path="/ViewAllLoadsDriver" render={(props) => {
                    return <ViewAllLoadsDriver
                                {...props}
                                getAllLoads={this.getAllLoads} />
                }} />

                <Route exact path="/ViewAllLoadsDispatcher/:loadId(\d+)" render={props => {
                            return (
                            <AssignEditLoads
                                {...props}
                                deleteLoad={this.deleteLoad}
                                loads={this.state.loads}
                            />
                            );
                        }}
                        />
                        <Route
                        path="/loads/:loadId(\d+)/edit" render={(props) => {
                            return( <EditLoad
                            {...props}
                            updateLoad={this.updateLoad}
                            loads={this.state.loads}
                            users={this.state.users}
                            />
                            );
                        }}
                        />
            </React.Fragment>


        )
    }
}

export default ApplicationViews