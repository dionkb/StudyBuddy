const {location} = require('../models');

const locationData = [
{
    
    "address": "504 N Alafaya Trail Unit 107 Orlando, FL 32828",
    "name": "Royal Tea",
    "Contact": "(407)-401-9969",
    "amenities": "WiFi, Parking"
  }, {
    "address": "1842 Winter Park Rd, Orlando, FL 32803",
    "name": "Stardust Video & Coffee",
    "Contact": "(407)-623-3393",
    "amenities": "WiFi, Parking, Live Music"
  }, {
    "address": "444 N Bumby ave Orlando, FL 32803",
    "name": "Drunken Monkey Coffee",
    "Contact": "(407)-893-4994",
    "amenities": "WiFi, Parking"
  }, {

    "address": "5310 E Colonial Dr Orlando, FL 32807",
    "name": "SnowBean",
    "Contact": "(407)-270-8811",
    "amenities": "WiFi, Parking, Outdoor Seating"
  }, {
    "address": "1212 Woodward st Unit 1 Orlando, FL 32803",
    "name": "Qreate Coffee",
    "Contact": "(407)-601-1796",
    "amenities": "WiFi, Parking, Pet Friendly"
  }, {

    "address": "390 N Orange Ave, Orlando, FL 32801",
    "name": "Foxtail Coffee Bar",
    "Contact": "(407)-930-1700",
    "amenities": "WiFi, Outdoor Dining, Parking"
  }, {

    "address": "2425 E South St, Orlando, FL 32803",
    "name": "Easy Luck Coffee & Bodega",
    "Contact": "(407)-476-3799",
    "amenities": "WiFi, Outdoor Seating, Parking, Pet Friendly"
  },{

    "address": "1011 E Colonial Dr, Orlando, Fl 32803",
    "name": "Lineage Coffee",
    "Contact": "(407)-205-8096",
    "amenities": "WiFi, Outdoor Seating, Parking"
  }, {

    "address": "3000 Corrine Dr, Orlando, FL 32803",
    "name": "Lobos Coffee Roasters",
    "Contact": "(689)-220-3567",
    "amenities": "WiFi, Outdoor Seating, Pet Friendly"
  }, {

    "address": "9474 Narcoossee Rd, Orlando, FL 32827",
    "name": "Vanessas's Coffee Shop",
    "Contact": "(407)-286-3544",
    "amenities": "WiFi, Street Parking"
  }, {

    "address": "8457 S John Young Pkwy, Orlando, FL 32819",
    "name": "Spring Tea",
    "Contact": "(407)-413-5335",
    "amenities": "Parking"
  }, {

    "address": "448 N Terry Ave, Orlando, FL 32801",
    "name": "The Monroe",
    "Contact": "(407)-734-2102",
    "amenities": "WiFi, Parking Garage, Full Bar, Pet Friendly"
  }, {

    "address": "420 E Church St #118, Orlando, FL 32801",
    "name": "Bynx Orlando",
    "Contact": "(407)-440-3030",
    "amenities": "WiFi, Parking Garage" 
  }, {

    "address": "10376 E Colonial Unit #126, Orlando, FL 32817",
    "name": "Ms Tea's Bento",
    "Contact": "(407)-203-4496",
    "amenities": "WiFi, Parking" 
  }, {

    "address": "12098 Collegiate Way, Orlando, FL 32817",
    "name": "Kung Fu Tea",
    "Contact": "(407)-286-2055",
    "amenities": "WiFi, Street Parking,"   
  }, {

    "address": "7004 Tavistock Lakes Blvd #116, Orlando, FL 32827",
    "name": "Foxtail Coffee Co.",
    "Contact": "(407)-313-2841",
    "amenities": "WiFi, Outdoor seating, Pets Allowed, Parking" 
  }, {

    "address": "4816 New Broad St, Orlando, FL 32814",
    "name": "Frosty Fox",
    "Contact": "(689)-241-5876",
    "amenities": "WiFi, street parking"  
  }, {

    "address": "2842 S Alafaya Trail, Orlando, FL 32828",
    "name": "DUO58 Community Coffee",
    "Contact": "(689)-900-4386",
    "amenities": "WiFi, Outdoor Seating, Street Parking "    
  }];
  const seedLocation = () => Location.bulkCreate(locationData);
  
  module.exports = seedLocation;