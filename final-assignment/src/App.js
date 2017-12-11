import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Onoff from './components/Onoff';
import AdvStats from './components/AdvStats';

class App extends Component {
  constructor() {
		super();
		this.state = {
      BBRef: [],
      RPM: [],
      OnOff: [],
      Descending: null
        
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
  sortRow=(e)=> {
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
          BBRef: this.state.BBRef.sort(compare)
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
          BBRef: this.state.BBRef.sort(compare)
        })
      }
    //this.setState({
     //BBRef: this.state.BBRef.sort(compare)
    //})
    console.log(this.state.Descending)
  }
  render() {
    return (
      <div className="App Container">
        <Header />
        <Route exact path ='/'render={(props) => <AdvStats descending={this.state.Descending} sortRow={this.sortRow} bbref={this.state.BBRef} {...props}/>} />
      </div>
    );
  }
}

export default App;
