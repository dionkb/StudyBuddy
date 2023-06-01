// Allows use of express router to develop pathway
const router = require('express').Router();

// Allows use of different paths via controller js files
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');    -----> EXAMPLE
const primaryRoutes = require('./primaryRoutes');

// Uses the js specified above when using the related routes
// router.use('/', homeRoutes);    -----> EXAMPLE
router.use('/api', apiRoutes);
router.use('/', primaryRoutes);

// Allows this to be exported elsewhere
module.exports = router;
