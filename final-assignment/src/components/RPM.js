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

class RPM extends Component {
    render() {
        let dataLabels = this.props.rpm.map((player, i)=>{
            return player.name
        })
        let dRPM = this.props.rpm.map((player, i)=>{
            return player.dRPM
        })
        let oRPM = this.props.rpm.map((player, i)=>{
            return player.oRPM
        })
        let RPM = this.props.rpm.map((player, i)=>{
            return player.RPM
        })
        let wins = this.props.rpm.map((player, i)=>{
            return player.wins
        })
        const data ={
            labels: dataLabels,
            datasets:[
                {label: 'dRPM',
                backgroundColor: 'blue',
                data: dRPM
                },
                {label: 'oRPM',
                backgroundColor: 'red',
                data: oRPM
                },
                {label: 'RPM',
                backgroundColor: 'yello',
                data: RPM
                },
                {label: 'Wins',
                backgroundColor: 'green',
                data: wins
                }
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
                            onCellClick={(e) => this.props.sortRow(e, 'RPM')}>
                                    <TableRowColumn data-key='name'>Name
                                    {this.props.sorted === "Name" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                    <TableRowColumn data-key='oRPM'>oRPM
                                    {this.props.sorted === "oRPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }
                                    </TableRowColumn>
                                    <TableRowColumn data-key='dRPM'>dRPM
                                    {this.props.sorted === "dRPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                    <TableRowColumn data-key='RPM'>RPM
                                    {this.props.sorted === "RPM" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                    <TableRowColumn data-key='wins'>Wins
                                    {this.props.sorted === "wins" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                </TableRow>
                            </TableHeader>
                        <TableBody 
                        displayRowCheckbox={false}
                        showRowHover={true}
                        >
                            {this.props.rpm.map((player, i) =>{
                                return(
                                    <TableRow>
                                        <TableRowColumn>{player.name}</TableRowColumn>
                                        <TableRowColumn>{player.oRPM}</TableRowColumn>
                                        <TableRowColumn>{player.dRPM}</TableRowColumn>
                                        <TableRowColumn>{player.RPM}</TableRowColumn>
                                        <TableRowColumn>{player.wins}</TableRowColumn>
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

export default RPM;