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
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {Bar} from 'react-chartjs-2';

class OnOff extends Component {

    render() {
        let dataLabels = this.props.onoff.map((player, i)=>{
            return player.name
        })
        let onOffense = this.props.onoff.map((player, i)=>{
            return player.onOffense
        })
        let onDefense = this.props.onoff.map((player, i)=>{
            return player.onDefense
        })
        let onNet = this.props.onoff.map((player, i)=>{
            return player.onNet
        })
        let offOffense = this.props.onoff.map((player, i)=>{
            return player.offOffense
        })
        let offDefense = this.props.onoff.map((player, i)=>{
            return player.offDefense
        })
        let offNet = this.props.onoff.map((player, i)=>{
            return player.offNet
        })
        let totalNet = this.props.onoff.map((player, i)=>{
            return player.totalNet
        })
        const data ={
            labels: dataLabels,
            datasets:[
                {label: 'Net(On)',
                backgroundColor: 'yellow',
                data: onNet
                },
                {label: 'Net(Off)',
                backgroundColor: 'orange',
                data: offNet
                },
                {label: 'Net(Total)',
                backgroundColor: 'black',
                data: totalNet}
            ]
        }
        return(
        <div>
            <div>
            <MuiThemeProvider>
                <DropDownMenu onChange={this.props.handleChange} value={this.props.value} style={{float: 'left'}}>
                    <MenuItem value={1} primaryText="Table" />
                    <MenuItem value={2} primaryText="Chart" />
                </DropDownMenu>
                </MuiThemeProvider>
            </div>
            <div>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
                {this.props.value === 2 ? (
                <Bar data={data} />) : (
            <MuiThemeProvider>
            <Table>
                <TableHeader
                adjustForCheckbox={false}
                displaySelectAll={false}>
                    <TableRow
                        onCellClick={(e) => this.props.sortRow(e, 'OnOff')}>
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
                                {this.props.sorted === "offNet" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                <TableRowColumn data-key='totalNet'>netRTG(total)
                                {this.props.sorted === "totalNet" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
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
                                    <TableRowColumn>{player.totalNet}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                </MuiThemeProvider>
                )}
                 </div>
        )
    }

}
export default OnOff;