// Allows use of express router to develop pathway
const router = require('express').Router();

// Allows use of different paths via controller js files
// const userRoutes = require('./user-routes');   -----> EXAMPLE'
const userRoutes = require('./userRoutes');
const locationRoutes = require('./locationRoutes');

// Uses the js specified above when using the related routes
// router.use('/users', userRoutes);   -----> EXAMPLE
router.use('/users', userRoutes);
router.use('/locations', locationRoutes);

// Allows this to be exported elsewhere
module.exports = router;