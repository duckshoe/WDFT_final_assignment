import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900} from 'material-ui/styles/colors';
import {Link} from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {

    render() {
        return(
        <MuiThemeProvider>
            <AppBar 
                style={{backgroundColor: grey900}}     
                title="I'll Have a Better Title Eventually I Promise" 
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.props.handleOpen}
            />
            <Drawer
                docked={false}
                width={200}
                open={this.props.open}
            >
                <Link to='./'>
                    <MenuItem onClick={this.props.handleClose}>Box Score Stats</MenuItem>
                </Link>
                <Link to='./onoff'>
                    <MenuItem onClick={this.props.handleClose}>On/Off Stats</MenuItem>
                </Link>
                <Link to='./rpm'>
                    <MenuItem onClick={this.props.handleClose}>RPM Stats</MenuItem>
                </Link>
            </Drawer>
        </MuiThemeProvider>
        );
    }

}

export default Header;