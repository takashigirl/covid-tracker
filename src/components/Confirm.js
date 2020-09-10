import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, phonenumber, address}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              
                <ListItem primaryText="First Name" secondaryText={firstName} />
              
                <ListItem primaryText="Last Name" secondaryText={lastName} />
              
                <ListItem primaryText="Email" secondaryText={email} />
              
                <ListItem primaryText="Phone Number" secondaryText={phonenumber} />
              
                <ListItem primaryText="address" secondaryText={address} />
              
              
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;