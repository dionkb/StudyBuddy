// Calling config for login to seqeulize via .env file
const sequelize = require('../config/connection');
const seedUsers = require('./userData');  
const seedLocation = require('./LocationData')

// Code to run various seed files to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });

   await seedUsers();
   await seedLocation();

  process.exit(0);
};

// Initializing seeding
seedAll();
