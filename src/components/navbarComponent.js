import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Event Tracking</Link>
                    <button className="navbar-toggler" >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-Link" to="/">Event <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-Link" to="/create">Create Event</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-Link" to="/user">Create User</Link>
                        </li>
                    
                        </ul>
                    </div>
              </nav>
        );
    }
}