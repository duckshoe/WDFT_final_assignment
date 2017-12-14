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
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

class AdvStats extends Component {

    render() {
        let dataLabels = this.props.bbref.map((player, i)=>{
            return player.name
        })
        let OWS = this.props.bbref.map((player, i)=>{
            return player.OWS
        })
        let DWS = this.props.bbref.map((player, i)=>{
            return player.DWS
        })
        let WS = this.props.bbref.map((player, i)=>{
            return player.WS
        })
        let WS48 = this.props.bbref.map((player, i)=>{
            return player.WS48
        })
        let OBPM = this.props.bbref.map((player, i)=>{
            return player.OBPM
        })
        let DBPM = this.props.bbref.map((player, i)=>{
            return player.DBPM
        })
        let BPM = this.props.bbref.map((player, i)=>{
            return player.BPM
        })
        let VORP = this.props.bbref.map((player, i)=>{
            return player.VORP
        })
        const data ={
            labels: dataLabels,
            datasets:[
                {label: 'OWS',
                backgroundColor: 'red',
                data: OWS
                },
                {label: 'DWS',
                backgroundColor: 'gold',
                data: DWS
                },
                {label: 'WS',
                backgroundColor: 'black',
                data: WS},
                {label: 'OBPM',
                backgroundColor: 'crimson',
                data: OBPM
                },
                {label: 'DBPM',
                backgroundColor: 'orange',
                data: DBPM
                },
                {label: 'BPM',
                backgroundColor: 'blue',
                data: BPM},
                {label: 'VORP',
                backgroundColor: 'purple',
                data: VORP}
            ]
        }
        return (
            <div>
                <div>
                <MuiThemeProvider>
                <DropDownMenu onChange={this.props.handleChange} value={this.props.value} style={{float: 'left'}}>
                    <MenuItem value={1} primaryText="Table" />
                    <MenuItem value={2} primaryText="Chart" />
                </DropDownMenu>
                </MuiThemeProvider>
                </div>
                <div className='content'>
                    <div>
                    <h2>About the Numbers</h2>
                    </div>
                    <Row className="show-grid">
                    
                        <Col xs={12} md={4}>
                            <p>OWS: Offensive Win Shares
                            <br />
                            DWS: Defensive Win Shares
                            <br />
                            WS: Win Shares
                            <br />
                            WS/48: Win Shares per 48 minutes
                            <br />
                            Information about how Win Shares are calculated can be found <a href='https://www.basketball-reference.com/about/ws.html'>here.</a>
                            </p>
                        </Col>
                        <Col xs={12} md={2}/> 
                        <Col xs={12} md={4}>
                            <p>OBPM: Offensive Box Score Plus-Minus
                            <br />
                            DBPM: Defensive Box Score Plus-Minus
                            <br />
                            BPM: Box Score Plus-Minus
                            <br />
                            VORP: Value Over Replacement Player
                            <br />
                            Information about how BPM/VORP are calculated can be found <a href='https://www.basketball-reference.com/about/bpm.html'>here.</a>
                            </p>
                        </Col>
                    </Row>
                </div>
                {this.props.value === 2 ? (
                <Bar data={data} />) : (
                <MuiThemeProvider>
                    <Table>
                        <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}>
                            <TableRow
                            onCellClick={(e) => this.props.sortRow(e, 'BBRef')}>
                                        <TableRowColumn data-key='name'>Name
                                        {this.props.sorted === "Name" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
                                        <TableRowColumn data-key='OWS'>OWS
                                        {this.props.sorted === "OWS" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }
                                        </TableRowColumn>
                                        <TableRowColumn data-key='DWS'>DWS
                                        {this.props.sorted === "DWS" ? (this.props.descending ? <NavigationArrowDropDown /> : <NavigationArrowDropUp />): null }</TableRowColumn>
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
                        )}
                         </div>
                         )
                }
}

export default AdvStats;