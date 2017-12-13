import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Bar} from 'react-chartjs-2';

/*let dataLabels = this.props.rpm.map((player, index)=> {
    return (player.name)
})
const data = {
    labels: dataLabels
}*/

class Charts extends Component {


    render() {
        console.log('Chart props: ' + this.props.rpm);
        return (
            <div>
                <Bar 
                data={this.props.rpm}
                />
            </div>
        )
    }
}

export default Charts;