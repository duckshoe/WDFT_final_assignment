import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import NavigationArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import NavigationArrowDropUp from 'material-ui/svg-icons/navigation/arrow-drop-up';


class AdvStats extends Component {

    render() {
        return (
            <div>
            {/*{this.props.bbref.map((player, i)=>{
                return	( <div>*/}
                 <MuiThemeProvider>
                            <Table>
                                <TableHeader
                                adjustForCheckbox={false}
                                displaySelectAll={false}>
                                    <TableRow
                                     onCellClick={(e) => this.props.sortRow(e)}>
                                        <TableRowColumn data-key='name'>Name</TableRowColumn>
                                        <TableRowColumn data-key='OWS'>OWS
                                        {(this.props.Descending === false) ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />}
                                        </TableRowColumn>
                                        <TableRowColumn data-key='DWS'>DWS</TableRowColumn>
                                        <TableRowColumn data-key='WS'>WS</TableRowColumn>
                                        <TableRowColumn data-key='WS48'>WS/48</TableRowColumn>
                                        <TableRowColumn data-key='OBPM'>OBPM</TableRowColumn>
                                        <TableRowColumn data-key='DBPM'>DBPM</TableRowColumn>
                                        <TableRowColumn data-key='BPM'>BPM</TableRowColumn>
                                        <TableRowColumn data-key='VORP'>VORP</TableRowColumn>
                                    </TableRow>
                                </TableHeader>
                                <TableBody 
                                displayRowCheckbox={false}
                                showRowHover={true}
                                >
                                    {this.props.bbref.map((player, i) =>{
                                        return(
                                            <TableRow>
                                                <TableRowColumn>{player.name}</TableRowColumn>
                                                <TableRowColumn>{player.OWS}</TableRowColumn>
                                                <TableRowColumn>{player.DWS}</TableRowColumn>
                                                <TableRowColumn>{player.WS}</TableRowColumn>
                                                <TableRowColumn>{player.WS48}</TableRowColumn>
                                                <TableRowColumn>{player.OBPM}</TableRowColumn>
                                                <TableRowColumn>{player.DBPM}</TableRowColumn>
                                                <TableRowColumn>{player.BPM}</TableRowColumn>
                                                <TableRowColumn>{player.VORP}</TableRowColumn>
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </MuiThemeProvider>
                         </div>
                         )
                }
        
    

}

export default AdvStats;