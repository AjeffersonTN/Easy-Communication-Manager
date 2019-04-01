import React, { Component } from 'react';


class ViewAllLoadsDispatcher extends Component {

    render() {

        return (
            <section className="loads">
            <h1>Available Loads</h1>
            {
                this.props.loads.map(loads =>
                    <div key={loads.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                            <div>
                            Load Name: {loads.loadName}<br></br>
                            Pickup Address: {loads.pickupAddress}<br></br>
                            Pickup Date: {loads.pickupDate}<br></br>
                            Delivery Address: {loads.deliveryAddress}<br></br>
                            Delivery Date: {loads.deliveryDate} <br></br>
                            Email: {loads.email}
                            <br></br>
                            Rate: {loads.rate}
                                <div>
                                <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/loads/${loads.id}/edit`);
                                }}
                                >
                                Edit
                                </button>
                                <button key={loads.id} onClick={() => { this.props.deleteLoad(loads.id) }}
                                >Delete</button>
                                </div>
                                <hr></hr>
                            </div>
                            </h5>
                        </div>
                    </div>
        )
    }
     </section>
    )
}}
export default ViewAllLoadsDispatcher