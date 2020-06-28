import React, {Component} from 'react';
import Main from "./components/Main/Main";
import Board from "./components/Movie/board";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/main" component={Main}></Route>
            <Route path="/search/:query" component={Board}></Route>
          </Switch>
        </BrowserRouter>
      </div> 
    );
  }
}

export default App;
