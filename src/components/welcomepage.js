import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class welcomepage extends Component {
    render() {
        <MuiThemeProvider>
            <AppBar  title="please chooose the following option" />
            <Button> color="primary"
              variant="contained"
              onClick={this.continue}
            >im well</Button>
        </MuiThemeProvider>
        return (
           
        )
    }
}

export default welcomepage
