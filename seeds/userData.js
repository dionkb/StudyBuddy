const {User} = require("../models");

const userData = [
    {
    
        // "name": "John doe",
        "email": "catlover@aol.com",
        "password": "Bigcat125!"
      }, {
        // "name": "Ricky Smith",
        "email": "rickster5@gmail.com",
        "password": "Therickman?1"
      }, {
        // "name": "timmy Turner",
        "email": "Fairlyodd@gmail.com",
        "password": "Cosmowanda!2"
      }, {
        // "name": "Juju walker",
        "email": "spaceman2@yahoo.com",
        "password": "Apollo10!"
      }, {
        // "name": "Bobby Boucher",
        "email": "Waterboy@yahoo.com",
        "password": "H20isgood!"
      }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;