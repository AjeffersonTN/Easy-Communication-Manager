import React from 'react';

class AssignEditLoads extends React.Component {
    state = {
        loadName:"",
        loadPickupAddress:"",
        loadDeliveryAddress:"",
        loadPickupDate:"",
        loadDeliveryDate:"",
        loadRate:"",
        loadEmail:""
    }


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }
    //need to add driver add from drop down list
    assignLoad =evt => {
        evt.preventDefault();
        const newLoad ={
            loadName: this.state.loadName,
            pickupAddress: this.state.loadPickupAddress,
            deliveryAddress: this.state.loadDeliveryAddress,
            pickupDate: this.state.loadPickupDate,
            deliveryDate: this.state.loadDeliveryDate,
            rate: this.state.loadRate,
            email: this.state.loadEmail,
            notes: this.state.notes,
            userId: parseInt(sessionStorage.getItem('credentials'))
        }
        console.log(newLoad)
        //post newLoad to API and redirect to load list
        this.props
            .addLoad(newLoad)
            .then(() => this.props.history.push("/ViewAllLoadsDispatcher"));
    };
    viewLoads =evt => {
        evt.preventDefault();
        const newLoad ={
            loadName: this.state.loadName,

        }
        console.log(newLoad)
        //post newLoad to API and redirect to load list
        this.props
            .getAllLoads()
            .then(() => this.props.history.push("/ViewAllLoadsDispatcher"));
    };

    render () {
        return (
            <React.Fragment>
                <h1>Assign Loads</h1>
                <form className="assignEditLoads">

                    <div>
                        <label htmlFor="loadName">Load Name:</label>
                        <input
                        type="text"
                        required
                        className="create-account-form"
                        onChange={this.handleFieldChange}
                        id="loadName" />
                    </div>

                    <div>
                        <label htmlFor="loadPickupDate">Pickup Date:</label>
                        <input
                        type="date"
                        required
                        className="create-account-form"
                        onChange={this.handleFieldChange}
                        id="loadPickupDate" />
                    </div>

                    <div>
                        <label htmlFor="loadDeliveryDate">Delivery Date:</label>
                        <input
                        type="date"
                        required
                        className="create-account-form"
                        onChange={this.handleFieldChange}
                        id="loadDeliveryDate" />
                    </div>

                    <div>
                        <label htmlFor="loadPickupAddress">Pickup Address:</label>
                        <input
                         type="text"
                         required
                         className="create-account-form"
                         onChange={this.handleFieldChange}
                         id="loadPickupAddress" />
                    </div>
                    <div>
                        <label htmlFor="loadDeliveryAddress">Delivery Address:</label>
                        <input
                         type="text"
                         required
                         className="create-account-form"
                         onChange={this.handleFieldChange}
                         id="loadDeliveryAddress"/>
                    </div>

                    <div>
                        <label htmlFor="loadEmail">Email:</label>
                        <input
                         type="text"
                         required
                         className="create-account-form"
                         onChange={this.handleFieldChange}
                         id="loadEmail" />
                    </div>

                    <div>
                        <label htmlFor="loadRate">Rate:</label>
                        <input
                         type="text"
                         required
                         className="create-account-form"
                         onChange={this.handleFieldChange}
                         id="loadRate" />
                    </div>
                    <div>
                        <label htmlFor="loadNotes">Notes:</label>
                        <input
                         type="text"
                         required
                         className="create-account-form"
                         onChange={this.handleFieldChange}
                         id="loadNotes" />
                    </div>

                    <div className="form-group">
            <label htmlFor="driver">Driver:</label>
            <select
              defaultValue=""
              name="user"
              id="userId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select A Driver</option>
              {this.props.users.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.fullName}
                </option>
              ))}
            </select>
          </div>



                    <button
                    type="submit"
                    onClick={this.assignLoad}
                    className="submitButtons"
                    >
                    Assign</button>
                    <button
                    type="submit"
                    onClick={this.viewLoads}
                    >
                    View All Loads</button>

                </form>
          </React.Fragment>
        )
    }
}
export default AssignEditLoads
{/* <select
  defaultValue=""
  name="candyType"
  id="candyTypeId"
  onChange={this.handleFieldChange}
>
  <option value="">Select an candy type</option>
  {this.props.candyTypes.map(ct => (
    <option key={ct.id} id={ct.id} value={ct.id}>
      {ct.name}
    </option>
  ))}
</select> */}

{/* <div>
<label htmlFor="driver">Select Driver:</label>
<select
 defaultValue=""
 name="driver"
 onChange={this.handleFieldChange}
 id="driverId">
<option value="">Select a Driver</option>
{/* {
    this.props.users.map(e => (
        <option key={e.id} id={e.id} value={e.id}>
        {e.fullName}
        </option>
    ))
} */}
// </select>
// </div> */}