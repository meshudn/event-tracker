import React from 'react';
import Axios from 'axios';

export default class CreateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: ''
        }
        this.handleChange = this.handleChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);        
      }

    handleSubmit(event){
        event.preventDefault();
        const newUser = {
            username: this.state.username,
        }
        Axios.post('http://localhost:5000/users/add', newUser)
             .then(res => console.log(res.data));
        window.location = '/';     
    }
    handleChange(event){
        const {name,value} = event.target;
        this.setState({
          [name] : value
        });
    }

    render(){
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} >

                <div className="form-group">
                    <label >Username</label>
                    <input 
                        className="form-control" 
                        type="text"
                        onChange={this.handleChange} 
                        value={this.state.username} 
                        name="username" />
                </div>
                <button 
                  className="form-control" 
                  className="btn btn-primary">
                      Submit
                </button>
                </form> 
            </div>
        );
    }
}