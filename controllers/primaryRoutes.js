const router = require('express').Router();
const sequelize = require('sequelize');
const { Location, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const locationData = await Location.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const locations = locationData.map((location) => location.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      locations, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for searching locations based on a query
router.get('/locations', withAuth, async (req, res) => {
  try {
      const { query } = req.query;

      const locationData = await Location.findAll({
        where: {
          [sequelize.or]: [
            { name: { [sequelize.like]: `%${query}%` } },
            { address: { [sequelize.like]: `%${query}%` } },
            { opening: { [sequelize.like]: `%${query}%` } },
            { closing: { [sequelize.like]: `%${query}%` } },
            { amenities: { [sequelize.like]: `%${query}%` } },
          ],
        },
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
        raw: true, // To retrieve raw data instead of Sequelize model instances
      });

      res.render('locations', {
        locations: locationData,
        logged_in: req.session.logged_in,
        query
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// This route is used for retrieving a specific location by its ID.
router.get('/locations/:id', withAuth, async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const location = locationData.get({ plain: true });

    res.render('locations', {
      ...location,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });
    console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

module.exports = router;