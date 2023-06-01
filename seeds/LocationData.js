const {location} = require('../models');

const locationData = [
{
    
    "address": "504 N Alafaya Trail Unit 107 Orlando, FL 32828",
    "name": "Royal Tea",
    "Contact": "(407)-401-9969",
    "amenities": "WiFi"
  }, {
    "address": "1842 Winter Park Rd, Orlando, FL 32803",
    "name": "Stardust Video & Coffee",
    "Contact": "(407)-623-3393",
    "amenities": "WiFi"
  }, {
    "address": "444 N Bumby ave Orlando, FL 32803",
    "name": "Drunken Monkey Coffee",
    "Contact": "(407)-893-4994",
    "amenities": "WiFi"
  }, {

    "address": "5310 E Colonial Dr Orlando, FL 32807",
    "name": "SnowBean",
    "Contact": "(407)-270-8811",
    "amenities": "WiFi"
  }, {
    "address": "1212 Woodward st Unit 1 Orlando, FL 32803",
    "name": "Qreate Coffee",
    "Contact": "(407)-601-1796",
    "amenities": "WiFi"
  }];
  const seedLocation = () => Location.bulkCreate(locationData);
  
  module.exports = seedLocation;