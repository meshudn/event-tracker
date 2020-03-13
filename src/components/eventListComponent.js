import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Events = props => (
    <tr>
    <td>{props.eventList.username}</td>
    <td>{props.eventList.description}</td>
    <td>{props.eventList.duration}</td>
    <td>{props.eventList.date}</td>
    <td>
        <Link to={"/edit/"+props.eventList._id}>
            Edit
        </Link>
        |
        <a
            href="#" 
            onClick={(event)=>props.deleteEvent(props.eventList, event)}>
                    Delete
        </a>
    </td>
    </tr>
)

export default class EventList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
            count: '0'
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:5000/events/')
             .then(res => {
                     this.setState({
                         events: res.data
                     })
                 console.log(this.state.events);
                 
             })
             .catch(err => console.log('events not fetching'+err));
    }

    renderEventsInDom(){
        return this.state.events.map(currentEvent => {
            return (<Events 
                eventList={currentEvent} 
                deleteEvent={this.deleteEvent} 
                key={currentEvent._id}
                />)
        });
        
    }

    deleteEvent(single, event){
        event.preventDefault();
        Axios.delete('http://localhost:5000/events/'+single._id)
             .then(res => console.log(res.data));
    
        window.location = "/"
    }

    render(){
        return (
            <div>
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderEventsInDom()}
                    </tbody>
                    </table>
            </div>
        );
    }
}