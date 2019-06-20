import React, { Component } from 'react';
import "../../index.css"


class ViewAllLoadsDriver extends Component {

    render() {

        return (
            <section className="loads">
            <h1>Travis's Active Loads</h1>
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
                            Rate: {loads.rate}<br></br>
                            Notes: {loads.notes}<br></br>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/loads/${loads.id}/edit`);
                                }}
                                >
                                Add Notes
                                </button>

                            </div>
                            </h5>
                        </div>
                    </div>
        )
    }
     </section>
    )
}}
export default ViewAllLoadsDriver