// import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './services/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Switch>
            <Route path = '/' exact component = {ListEmployeeComponent} />
            <Route path = '/employees' component = {ListEmployeeComponent } />
            <Route path = '/add-employee/:id' component = { CreateEmployeeComponent } />
            <Route path = '/view-employee/:id' component = { ViewEmployeeComponent } />
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
