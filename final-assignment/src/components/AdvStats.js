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
        console.log(this.props.descending);
        return (
            <div>
                <MuiThemeProvider>
                    <Table>
                        <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}>
                            <TableRow
                            onCellClick={(e) => this.props.sortRow(e)}>
                                        <TableRowColumn data-key='name'>Name
                                        {this.props.sorted === "Name" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='OWS'>OWS
                                        {this.props.sorted === "OWS" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }
                                        </TableRowColumn>
                                        <TableRowColumn data-key='DWS'>DWS
                                        {this.props.sorted === "OWS" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='WS'>WS
                                        {this.props.sorted === "WS" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='WS48'>WS/48
                                        {this.props.sorted === "WS48" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='OBPM'>OBPM
                                        {this.props.sorted === "OBPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='DBPM'>DBPM
                                        {this.props.sorted === "DBPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='BPM'>BPM
                                        {this.props.sorted === "BPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='VORP'>VORP
                                        {this.props.sorted === "VORP" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
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