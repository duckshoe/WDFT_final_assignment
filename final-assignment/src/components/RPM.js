import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
    Table,
    TableBody,
    TableHeader,
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
                backgroundColor: 'purple',
                data: dRPM
                },
                {label: 'oRPM',
                backgroundColor: 'red',
                data: oRPM
                },
                {label: 'RPM',
                backgroundColor: 'gold',
                data: RPM
                },
                {label: 'Wins',
                backgroundColor: 'black',
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
                <div className='content'>
                <div>
                <h2>RPM</h2>
                </div>
                <Row className="show-grid">
                    <Col xs={12} md={6}>
                        <p>ORPM: Offensive Real Plus Minus
                        <br />
                        DRPM: Defensive Real Plus Minus
                        <br />
                        RPM: Real Plus Minus
                        <br />
                        Wins: Estimate of the number of wins that player is responsible for
                        <br />
                        An explanation of how Real Plus Minus works can be found <a href='http://www.espn.com/nba/story/_/id/10740818/introducing-real-plus-minus'>here.</a>
                        </p>
                    </Col>

                    <Col xs={12} md={4} />
                       
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
                                    <TableRow key={i}>
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