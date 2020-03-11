const router = require('express').Router();
let User = require('../models/userModel');

router.route('/').get((request, response)=>{
    User.find()
        .then(users => response.json(users))
        .catch(err => response.status(400).json('Error' + err));
});

router.route('/add').post((request, response)=>{
    const username = request.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => response.json('User added!!'))
        .catch(err => response.status(400).json('Error' + err));
});


module.exports = router;