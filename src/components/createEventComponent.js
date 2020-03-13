import React from 'react';
import Axios from 'axios';

export default class CreateEvent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          username: '',
          description: '',
          duration: 0,
          date: '',
          users: []
        }
        this.handleChange = this.handleChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);        
      }

    componentDidMount(){
        Axios.get('http://localhost:5000/users/')
             .then(response => {
                 if(response.data.length > 0){
                     this.setState({
                         users: response.data.map(user => user.username),
                         username: response.data[0].username
                     });
                 }
             })
    }

    handleSubmit(event){
        event.preventDefault();
        const newEvent = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: new Date()
        }
        console.log(newEvent);
        Axios.post('http://localhost:5000/events/add', newEvent)
             .then(res => console.log(res.data))
             .catch(err => console.log('error: ' + err));

        window.location = "/";
       
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
                    <select
                    className="form-control" 
                    name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}>
                        {
                            this.state.users.map(function(user){
                                return (
                                    <option
                                      key={user}
                                      value={user}
                                      >
                                        {user}
                                    </option>
                                )
                            })
                        }
                    </select>
                
                </div>

                <div className="form-group">
                    <label >Description</label>
                    <input className="form-control" type="text" onChange={this.handleChange} value={this.state.description} name="description" />
                </div>

                <div className="form-group">
                    <label >Duration</label>
                    <input className="form-control" onChange={this.handleChange} type="number" name="duration" value={this.state.duration}/>
                </div>

                <div className="form-group">
                    <label >Date</label>
                    <input className="form-control" onChange={this.handleChange} type="datepicker" name="date" value={this.state.date}/>
                </div>

                <button className="form-control" className="btn btn-primary">Submit</button>
              
                </form> 
            </div>
        );
    }
}