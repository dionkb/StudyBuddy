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
          attributes: ['email'],
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
      // const { query } = req.query;

      // const locationData = await Location.findAll({
      //   where: {
      //     [sequelize.or]: [
      //       { name: { [sequelize.like]: `%${query}%` } },
      //       { address: { [sequelize.like]: `%${query}%` } },
      //       { opening: { [sequelize.like]: `%${query}%` } },
      //       { closing: { [sequelize.like]: `%${query}%` } },
      //       { amenities: { [sequelize.like]: `%${query}%` } },
      //     ],
      //   },
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['name'],
      //     },
      //   ],
      //   raw: true, // To retrieve raw data instead of Sequelize model instances
      // });

      res.render('locations', {
        // locations: locationData,
        logged_in: req.session.logged_in,
        // query
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// This route is used for retrieving a specific location by its ID.
router.get('/locations/:id', withAuth, async (req, res) => {
  try {
    const locationData = await Location.findByPk(req.params.id);

    const location = locationData.get({ plain: true });

    res.render('locations', { location, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, (req, res) => {
  let user_id = req.session.user_id;
  Location.findAll({
      where: { user_id:  user_id },
      attribute: ['id', 'address', 'name', 'amenities', 'user_id'], 
      include: [
          {
              model: User,
              attributes: ['email'],
          },
      ],
      order: [['created_at', 'DESC']],
  })
  .then((userPostData) => {
      const userPosts = userPostData.map((userPost) => userPost.get({ plain: true }));
      const noPosts = {
          id: null,
          name: "You do not have any posted locations",
          createdAt: new Date(),
          address: "Add your first location by clicking the 'Recommend a place' button",
          user_id: user_id,
      };
      if (userPosts.length === 0) {
          userPosts.push(noPosts);
      };

      res.render('profile', { 
          userPosts,
          logged_in: req.session.logged_in, 
          email: req.session.email,
      })  
  })
  .catch((err) => {
      console.log(err);
      res.status(500).json(err);
  });
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