import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import  Loadar  from './component/lodar/lodarComponent';
import EmployeeContainer from './component/employee/employeeContainer';  

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Loadar/> */}
        <EmployeeContainer/>
      </div>
    );
  }
}

export default App;
