// Calling config for login to seqeulize via .env file
const sequelize = require('../config/connection');
// const seedUsers = require('./userData');   -----> EXAMPLE

// Code to run various seed files to seed the database
const seedAll = async () => {
  await sequelize.sync({ force: true });
//   await seedUsers();   -----> EXAMPLE
  process.exit(0);
};

// Initializing seeding
seedAll();
