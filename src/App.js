
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Dashboard from './components/pages/Dashboard';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import User from './components/user/User'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/users/add" component={AddUser}></Route>
          <Route exact path="/users/edit/:id" component={EditUser}></Route>
          <Route exact path="/users/view/:id" component={User}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
