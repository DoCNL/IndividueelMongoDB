const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const HallSchema = new Schema({
    name: String,
    description: String
});
//to do: add angular part for cinemahalls
const Hall = mongoose.model('hall', HallSchema);

const hall1 = new Hall({
    name: 'Hall 1',
    description:'200 seats',
});//.save();

const hall2 = new Hall({
    name: 'Hall 2',
    description:'150 seats',
});//.save();

const hall3 = new Hall({
    name: 'Hall 3',
    description:'250 seats',
});//.save();

const hall4 = new Hall({
    name: 'Hall 4',
    description:'300 seats',
});//.save();

module.exports = Hall;