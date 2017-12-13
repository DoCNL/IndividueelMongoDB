const mongoose = require('mongoose');
const connection = require('../config/mongo.db');
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
    name: String,
    description: String,
    imagePath: String
});

const Film = mongoose.model('film', FilmSchema);

const film1 = new Film({
    name: 'Jigsaw',
    description:'A psycho murderer.',
    imagePath:'http://cdn.wegotthiscovered.com/wp-content/uploads/2017/09/saw1.jpg',
}).save();

const film2 = new Film({
    name: 'Insidious 4: The Last Key',
    description:'Who you gonna call?',
    imagePath:'http://de.web.img2.acsta.net/c_300_300/pictures/17/09/05/16/09/5210087.jpg',
}).save();

const film3 = new Film({
    name: 'Star Wars: The Last Jedi',
    description:'In a galaxy far, far away.',
    imagePath:'http://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/10/the-last-jedi-theatrical-blog.jpg',
}).save();

const film4 = new Film({
    name: 'Pacific Rim Uprising',
    description:'Dinosaurs can only be killed by huge robots.',
    imagePath:'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ1NjA2MDE5Ml5BMl5BanBnXkFtZTgwNjMyOTc2MzI@._V1_UY1200_CR64,0,630,1200_AL_.jpg',
}).save();
module.exports = Film;
