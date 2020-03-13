import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom"; 

import Navbar from './components/navbarComponent';
import EventList from './components/eventListComponent';
import EditEvent from './components/editEventComponen';
import CreateEvent from './components/createEventComponent';
import CreateUser from './components/createUserComponent';

class App extends React.Component {

  render(){
    return(
      <Router>
         <div className="container">
          <Navbar />
          <br/>
          <Route path='/' exact component={EventList}/>
          <Route path='/edit/:id' exact component={EditEvent}/>
          <Route path='/create' exact component={CreateEvent}/>
          <Route path='/user' exact component={CreateUser}/>
         </div>
      </Router>
    )
  }
}

export default App;
