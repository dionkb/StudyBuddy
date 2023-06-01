// Allows use of express router to develop pathway
const router = require('express').Router();

// Allows use of different paths via controller js files
const primaryRoutes = require('./primaryRoutes.js');
const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes.js');    -----> EXAMPLE

// Uses the js specified above when using the related routes
router.use('/', primaryRoutes);
router.use('/api', apiRoutes);
// router.use('/', homeRoutes);    -----> EXAMPLE

// Allows this to be exported elsewhere
module.exports = router;
