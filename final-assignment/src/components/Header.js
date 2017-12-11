import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey900} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

class Header extends Component {

    render() {
        return(
        <MuiThemeProvider>
        <AppBar 
        style={{backgroundColor: grey900}}     
        title="I'll Have a Better Title Eventually I Promise" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
        </MuiThemeProvider>
        );
    }

}

export default Header;