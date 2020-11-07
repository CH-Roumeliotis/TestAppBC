import React from "react";
//import React, { Component } from "react";
//import axios from 'axios';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { Register } from './Register';
import Sidebar from './Components/Sidebar';
import Web3 from 'web3';


export default class App extends React.Component{//function App() {

  state = {account: " " }

  async loadBlockChain(){
  window.web3 = new Web3(window.web3.currentProvider);
  window.ethereum.enable();
  const network = await window.web3.eth.net.getNetworkType();
  console.log(network);
  const accounts = await window.web3.eth.getAccounts();
  console.log(accounts);
  this.setState({account: accounts[0]});
  }

  render(){
  return (
    
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
}

//export default App;

