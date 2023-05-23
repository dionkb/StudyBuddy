If you want to use this, remove the 123 from the file name to allow .gitignore to catch this file

Add notes here as needed (pseudocode, acceptance criteria, grading criteria, etc.)

GOOD DEPENDENCIES & SCRIPTS TO CONSIDER FOR THIS TYPE OF PROJECT:

"scripts": {
    "seed": "node ./seeds/index.js",
    "start": "node server.js",
    "watch": "nodemon server.js"
  },
"dependencies": {
    "bcrypt": "^5.1.0",
    "connect-session-sequelize": "^7.1.6",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-handlebars": "^7.0.7",
    "express-session": "^1.17.3",
    "mysql2": "^3.3.1",
    "sequelize": "^6.31.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
  
USE THESE IN TERMINAL IF YOU WANT THEM ALL:
npm i bcrypt connect-session-sequelize dotenv express express-handlebars express-session mysql2 sequelize

npm i -D nodemon