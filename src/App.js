
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/pages/Dashboard';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/user/AddUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/users/add" component={AddUser}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
