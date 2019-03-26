import React from 'react';

class DriversConfirmationPage extends React.Component {
    render () {
    return (
        <React.Fragment>
            <h1>Load View</h1>
            <fieldset id="attachLoadView">
                <button type="submit">Confirm Pickup</button>

                <button type="submit">Confirm Delivery</button>
            </fieldset>
        </React.Fragment>
    )
    }
}
export default DriversConfirmationPage