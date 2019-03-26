import React from 'react';

class DispatcherPage extends React.Component {
    render () {
    return (
        <div>
            <h1>Dispatcher Page</h1>
            <h3>What would you like to do?</h3>
            <section>
                <button onClick= {() => {
                    this.props.history.push(`/ViewAllLoadsDispatcher`)}}>View Loads</button>
            </section>
            <section>
                <button onClick= {() => {
                    this.props.history.push(`/AssignEditLoads`)}}>Assign Loads</button>
            </section>
        </div>
    )
    }
}
export default DispatcherPage