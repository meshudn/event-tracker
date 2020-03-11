const router = require('express').Router();
let Event = require('../models/eventModel');

router.route('/').get((request, response)=>{
    Event.find()
        .then(events => response.json(events))
        .catch(err => response.status(400).json('Error' + err));
});

//getting event by an ID..
router.route('/:id').get((request, response)=>{
    Event.findById(request.params.id)
        .then(events => response.json(events))
        .catch(err => response.status(400).json('Error' + err));
});

//deleting an Event..
router.route('/:id').delete((request, response)=>{
    Event.findByIdAndDelete(request.params.id)
        .then(() => response.json("Event deleted successfully!"))
        .catch(err => response.status(400).json('Error' + err));
});

//updating an event ..
router.route('/update/:id').post((request, response)=>{
    Event.findById(request.params.id)
        .then((event) =>{
          event.username = request.body.username;
          event.description = request.body.description;
          event.duration = Number(request.body.duration);
          event.date = Date.parse(request.body.date);

          event.save()
               .then(()=> {response.json("updated successfully!")})
               .catch(err => response.status(400).json('Error' + err));


        })
        .catch(err => response.status(400).json('Error' + err));
});

//adding an event ..
router.route('/add').post((request, response)=>{
    const username = request.body.username;
    const description = request.body.description;
    const duration = request.body.duration;
    const date = request.body.date;
    const newEvent = new Event({username, description, duration, date});

    newEvent.save()
        .then(() => response.json('Event added!!'))
        .catch(err => response.status(400).json('Error' + err));
});

module.exports = router;