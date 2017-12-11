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

class OnOff extends Component {

    render() {
        return(
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
                                <TableRowColumn data-key='onOffense'>oRTG(On)
                                {this.props.sorted === "onOffense" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }
                                </TableRowColumn>
                                <TableRowColumn data-key='onDefense'>dRTG(on)
                                {this.props.sorted === "onDefense" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                <TableRowColumn data-key='onNet'>netRTG(on)
                                {this.props.sorted === "onNet" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                <TableRowColumn data-key='offOffense'>oRTG(off)
                                {this.props.sorted === "offOffense" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                <TableRowColumn data-key='offDefense'>dRTG(off)
                                {this.props.sorted === "offDefense" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                <TableRowColumn data-key='offNet'>netRTG(off)
                                {this.props.sorted === "OffNet" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                <TableRowColumn data-key='BPM'>netRTG(total)
                                {this.props.sorted === "BPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                            </TableRow>
                        </TableHeader>
                    <TableBody 
                    displayRowCheckbox={false}
                    showRowHover={true}
                    >
                        {this.props.onoff.map((player, i) =>{
                            let netTotal = (player.onNet - player.offNet).toFixed(2);
                            return(
                                <TableRow>
                                    <TableRowColumn>{player.name}</TableRowColumn>
                                    <TableRowColumn>{player.onOffense}</TableRowColumn>
                                    <TableRowColumn>{player.onDefense}</TableRowColumn>
                                    <TableRowColumn>{player.onNet}</TableRowColumn>
                                    <TableRowColumn>{player.offOffense}</TableRowColumn>
                                    <TableRowColumn>{player.offDefense}</TableRowColumn>
                                    <TableRowColumn>{player.offNet}</TableRowColumn>
                                    <TableRowColumn>{netTotal}</TableRowColumn>
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
export default OnOff;