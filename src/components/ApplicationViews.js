import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import AssignEditLoads from "./DisplayComponents/AssignEditLoads";
import DispatcherPage from "./DisplayComponents/DispatcherPage";
import DriversConfirmationPage from "./DisplayComponents/DriversConfirmationPage";
import EditLoad from "./DisplayComponents/EditLoad";
import DriverEdit from "./DisplayComponents/DriverEdit";
import ViewAllLoadsDispatcher from "./DisplayComponents/ViewAllLoadsDispatcher";
import ViewAllLoadsDriver from "./DisplayComponents/ViewAllLoadsDriver";
import UserManager from "../modules/UserManager";
import LoadManager from "../modules/LoadManager";
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
          }
                }} />
                <Route exact path="/AssignEditLoads" render={(props) => {
                     if (Number(sessionStorage.getItem("type_id")) === 2){
                    return <AssignEditLoads
                                {...props}
                                addLoad={this.addLoad}
                                getAllLoads={this.getAllLoads}
                                getAll={this.getAll}
                                users={this.state.users}
                                />
                     }else {
                        alert("You Don't Have Access!!!")
                        return <ViewAllLoadsDriver
                        getAllLoads={this.getAllLoads}
                        deleteLoad={this.deleteLoad}
                        loads={this.state.loads}
                        updateLoad={this.updateLoad}
                        {...props}/>
                        }
                }} />
                <Route exact path="/DispatcherPage" render={() => {
                    return <DispatcherPage />
                }} />
                <Route exact path="/DriversConfirmationPage" render={() => {
                    return <DriversConfirmationPage />
                }} />
                <Route exact path="/ViewAllLoadsDispatcher" render={(props) => {
                     if (Number(sessionStorage.getItem("type_id")) === 2){
                    return <ViewAllLoadsDispatcher
                                 deleteLoad={this.deleteLoad}
                                 getAllLoads={this.getAllLoads}
                                 loads={this.state.loads}
                                 {...props} />
                     }else {
                        alert("Your Loads Are Displayed!!!")
                        return <ViewAllLoadsDriver
                        getAllLoads={this.getAllLoads}
                        deleteLoad={this.deleteLoad}
                        loads={this.state.loads}
                        updateLoad={this.updateLoad}
                        {...props}/>
                        }

                }} />
                <Route exact path="/ViewAllLoadsDriver" render={(props) => {
                    return <ViewAllLoadsDriver
                                getAllLoads={this.getAllLoads}
                                deleteLoad={this.deleteLoad}
                                loads={this.state.loads}
                                updateLoad={this.updateLoad}
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
                        <Route path="/loads/:loadId(\d+)/edit" render={(props) => {
                            if (Number(sessionStorage.getItem("type_id")) === 2){
                            return( <EditLoad
                            {...props}
                            updateLoad={this.updateLoad}
                            loads={this.state.loads}
                            users={this.state.users}
                            />
                            );
                        } else {
                            return( <DriverEdit
                                {...props}
                                updateLoad={this.updateLoad}
                                loads={this.state.loads}
                                users={this.state.users}
                                />
                        ) }
                    }}
                        />
            </React.Fragment>
        )
    }
}
export default ApplicationViews