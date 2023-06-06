// Initializing required packages
const Sequelize = require('sequelize');
require('dotenv').config();

// Setting up info to be pulled from JAWSDB for secure server login
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

// Exporting file
module.exports = sequelize;


// heroku config:set JAWSDB_HOST=co28d739i4m2sb7j.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
// heroku config:set JAWSDB_PORT=3306
// heroku config:set JAWSDB_USERNAME=ulidz4pr0rt5iyo9
// heroku config:set JAWSDB_PASSWORD=ox1eq9zx6s54u0cf
// heroku config:set JAWSDB_DATABASE=b9oke80cnclp1s43
  