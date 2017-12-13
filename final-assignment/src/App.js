import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import RPM from './components/RPM';
import OnOff from './components/Onoff';
import AdvStats from './components/AdvStats';

class App extends Component {
  constructor() {
		super();
		this.state = {
      BBRef: [],
      RPM: [],
      OnOff: [],
      Descending: null,
      Sorted: null,
      open: false
        
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/BBRef')
    .then((response) => {
      this.setState({
        BBRef: response.data
      })
      console.log(this.state.BBRef)
    })
    axios.get('http://localhost:8080/rpm')
    .then((response) => {
      this.setState({
        RPM: response.data
      })
      console.log(this.state.RPM)
    })
    axios.get('http://localhost:8080/onoff')
    .then((response) => {
      this.setState({
        OnOff: response.data
      })
      console.log(this.state.OnOff)
    })
  }
  sortRow=(e, value)=> {
    //console.log(e.target.getAttribute('data-key'));
    let c = e.target.getAttribute('data-key');
      if (!this.state.Descending) {
        function compare(a, b) {
          if (a[c] > b[c])
            return -1;
          if (a[c] < b[c])
            return 1;
          return 0;
        }
        this.setState({
          Descending: true,
          Sorted: c,
          [`${value}`]: this.state[`${value}`].sort(compare)
        })
      } else {
        function compare(a, b) {
          if (a[c] < b[c])
            return -1;
          if (a[c] > b[c])
            return 1;
          return 0;
        }
        this.setState({
          Descending: false,
          Sorted: c,
          [`${value}`]: this.state[`${value}`].sort(compare)
        })
      }
  }
  handleOpen = () => this.setState({open: !this.state.open});
  
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="App Container">
        <Header handleOpen={this.handleOpen} handleClose={this.handleClose} open={this.state.open}/>
        <Route exact path ='/'render={(props) => <AdvStats sorted={this.state.Sorted} descending={this.state.Descending} sortRow={this.sortRow} bbref={this.state.BBRef} {...props}/>} />
        <Route path='/onoff' render={(props) => <OnOff sorted={this.state.Sorted} descending={this.state.Descending} sortRow={this.sortRow} onoff={this.state.OnOff} rpm={this.state.RPM} {...props} />} />
        <Route path='/rpm' render={(props) => <RPM sorted={this.state.Sorted} descending={this.state.Descending} sortRow={this.sortRow} rpm={this.state.RPM} {...props} />} />
      </div>
    );
  }
}

export default App;
