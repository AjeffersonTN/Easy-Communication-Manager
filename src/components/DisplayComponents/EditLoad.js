import React, { Component } from "react";
import LoadManager from '../../modules/LoadManager';

export default class EditLoad extends Component {
   // Set initial state
   state = {
    loads: "",
    users: "",
    types: ""
  }


  handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
  }

  updateExistingLoad = evt => {
    evt.preventDefault()

    if (this.state.loads === 1) {
      window.alert("Please complete load details");
    } else {
      const editedLoad = {
        id: this.props.match.params.loadId,
        loadName: this.state.loadName,
        pickupAddress: this.state.pickupAddress,
        deliveryAddress: this.state.deliveryAddress,
        pickupDate: this.state.pickupDate,
        deliveryDate: this.state.deliveryDate,
        rate: this.state.rate,
        email: this.state.email,
        userId: parseInt(sessionStorage.getItem('crdentials'))

      };

  this.props.updateLoad(editedLoad)
  .then(() => this.props.history.push("/viewAllLoadsDispatcher"))
  }
}

  componentDidMount() {
    LoadManager.getLoad(this.props.match.params.loadId)
    .then(load => {
      this.setState({
        dispatcher_id: load.dispatcher_id,
        driver_id: load.driver_id,
        loadName: load.loadName,
        pickupAddress: load.pickupAddress,
        deliveryAddress: load.deliveryAddress,
        pickupDate: load.pickupDate,
        deliveryDate: load.deliveryDate,
        rate: load.rate,
        email:load.email

      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <form className="editForm">
          <div className="form-group">
            <label htmlFor="loadName
            ">Load Name:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="0loadName"
              value = {this.state.loadName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pickupAddress">Pickup Address:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="pickupAddress"
              value = {this.state.pickupAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryAddress">Delivery Address:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="deliveryAddress"
              value = {this.state.deliveryAddress}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pickUpDate">Pickup Date:</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="date"
              value = {this.state.pickupDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deliveryDate">Delivery Date:</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="deliveryDate"
              value = {this.state.deliveryDate}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="email"
              value = {this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="rate">Rate:</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="rate"
              value = {this.state.rate}
            />
          </div>

          <button
            type="submit"
            onClick={this.updateExistingLoad}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
