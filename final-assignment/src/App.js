import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {Route} from 'react-router-dom'
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
      open: false,
      value: 1
        
    }
  }
  componentDidMount() {
    axios.get('http://localhost:8080/BBRef')
    .then((response) => {
      this.setState({
        BBRef: response.data
      })
    })
    axios.get('http://localhost:8080/rpm')
    .then((response) => {
      this.setState({
        RPM: response.data
      })
    })
    axios.get('http://localhost:8080/onoff')
    .then((response) => {
      this.setState({
        OnOff: response.data
      })
    })
  }
  sortRow=(e, value)=> {
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

  handleChange = (event, index, value) => {
    this.setState({value})
  }

  render() {
    return (
      <div className="App Container">
        <Header handleOpen={this.handleOpen} handleClose={this.handleClose} open={this.state.open}/>
        <Route exact path ='/'render={(props) => <AdvStats value={this.state.value} sorted={this.state.Sorted} descending={this.state.Descending} handleChange={this.handleChange} sortRow={this.sortRow} bbref={this.state.BBRef} {...props}/>} />
        <Route path='/onoff' render={(props) => <OnOff value={this.state.value} sorted={this.state.Sorted} descending={this.state.Descending} sortRow={this.sortRow} handleChange={this.handleChange} onoff={this.state.OnOff} rpm={this.state.RPM} {...props} />} />
        <Route path='/rpm' render={(props) => <RPM value={this.state.value} sorted={this.state.Sorted} descending={this.state.Descending} sortRow={this.sortRow} handleChange={this.handleChange} rpm={this.state.RPM} {...props} />} />
      </div>
    );
  }
}

export default App;
