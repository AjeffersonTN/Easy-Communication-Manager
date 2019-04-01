import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import { browserHistory } from "history";


import AssignEditLoads from "./DisplayComponents/AssignEditLoads";
import DispatcherPage from "./DisplayComponents/DispatcherPage";
import DriversConfirmationPage from "./DisplayComponents/DriversConfirmationPage";
import EditLoad from "./DisplayComponents/EditLoad";
import Login from "../components/auth/Login";
import ViewAllLoadsDispatcher from "./DisplayComponents/ViewAllLoadsDispatcher";
import ViewAllLoadsDriver from "./DisplayComponents/ViewAllLoadsDriver";
// import {Redirect} from "react-router"

import UserManager from "../modules/UserManager";
import LoadManager from "../modules/LoadManager";



class ApplicationViews extends Component {

    state = {
        users: [],
        types: [],
        loads: []
    }
    // aUserId = this.props.activeUserID()

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
        LoadManager.getLoad(id)
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
        return UserManager.addUser(newUser)
            .then(() => UserManager.getAll())
            .then(users =>
                this.setState({
                    users: users
                })
            )
    }
    get = (id) =>
    UserManager.get(id)
            .then(UserManager.getAll)
            .then(users => this.setState({ users: users }))

    delete = (id) =>
    UserManager.delete(id)
            .then(UserManager.getAll)
            .then(users => this.setState({ users: users }))

    getAll = () =>
    UserManager.getAll().then(users => this.setState({ users: users }))

    componentDidMount() {
        const newState = {}

        LoadManager.getAllLoads()
            .then(loads => newState.loads = loads)
            .then(() => this.setState(newState))
        UserManager.getAll()
            .then(users => newState.users = users)
            .then(() => this.setState(newState))
    }

    render() {
let id;
        return (
            <React.Fragment>

                <Route exact path="/" render={(props) => {
                    if (Number(sessionStorage.getItem("type_id")) === 2){

                        return <AssignEditLoads
                                    {...props}
                                    addLoad={this.addLoad}
                                    getAllLoads={this.getAllLoads}
                                    getAll={this.getAll}
                                    users={this.state.users}
                                    />
                    } else{

                        return <Redirect to="/ViewAllLoadsDriver" />
                        // {...props}
                        // deleteLoad={this.deleteLoad(id)}
                        // addLoad={this.addLoad}
                        // getAllLoads={this.getAllLoads}
                        // getAll={this.getAll}
                        // users={this.state.users}/>
          }


                }} />
                <Route exact path="/AssignEditLoads" render={(props) => {
                    return <AssignEditLoads
                                {...props}
                                addLoad={this.addLoad}
                                getAllLoads={this.getAllLoads}
                                getAll={this.getAll}
                                users={this.state.users}
                                />
                }} />
                <Route exact path="/DispatcherPage" render={() => {
                    return <DispatcherPage />
                }} />
                <Route exact path="/DriversConfirmationPage" render={() => {
                    return <DriversConfirmationPage />
                }} />
                {/* <Route exact path="/Login" render={(props) => {
                    return <Login
                    {...props}
                                addUser={this.addUser}
                                users={this.state.users} />
                }} /> */}


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

                                getAllLoads={this.getAllLoads}
                                deleteLoad={this.deleteLoad}
                                loads={this.state.loads}
                                {...props}/>
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