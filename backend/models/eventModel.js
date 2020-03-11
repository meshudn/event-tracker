const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  username : { type: String,require: true,},
  description : { type: String,require: true,},
  duration : { type: Number,require: true,},
  date : { type: Date,require: true,},
},
  {
    timestamps: true 
});
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;