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
  }, {

    "address": "390 N Orange Ave, Orlando, FL 32801",
    "name": "Foxtail Coffee Bar",
    "Contact": "(407)-930-1700",
    "amenities": "WiFi"
  }, {

    "address": "2425 E South St, Orlando, FL 32803",
    "name": "Easy Luck Coffee & Bodega",
    "Contact": "N/A",
    "amenities": "WiFi"
  },{

    "address": "1011 E Colonial Dr, Orlando, Fl 32803",
    "name": "Lineage Coffee",
    "Contact": "(407)-205-8096",
    "amenities": "WiFi"
  }, {

    "address": "3000 Corrine Dr, Orlando, FL 32803",
    "name": "Lobos Coffee Roasters",
    "Contact": "(689)-220-3567",
    "amenities": "WiFi"
  }, {

    "address": "9474 Narcoossee Rd, Orlando, FL 32827",
    "name": "Vanessas's Coffee Shop",
    "Contact": "(407)-286-3544",
    "amenities": "WiFi"
  }, {

    "address": "8457 S John Young Pkwy, Orlando, FL 32819",
    "name": "Spring Tea",
    "Contact": "(407)-413-5335",
    "amenities": "WiFi"
  }, {

    "address": "448 N Terry Ave, Orlando, FL 32801",
    "name": "The Monroe",
    "Contact": "(407)-734-2102",
    "amenities": "WiFi"
  }, {

    "address": "420 E Church St #118, Orlando, FL 32801",
    "name": "Bynx Orlando",
    "Contact": "(407)-440-3030",
    "amenities": "WiFi" 

  }];
  const seedLocation = () => Location.bulkCreate(locationData);
  
  module.exports = seedLocation;