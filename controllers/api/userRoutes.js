const router = require('express').Router();
const { User } = require('../../models');

// GET all users for testing purposes
router.get('/', async (req, res) => {
  try {
      const userData = await User.findAll({
          include: [ 
              // { model: Location } 
          ],
      });
      res.status(200).json(userData);
      } catch (err) {
      res.status(500).json(err);
  }
});

// CREATE new user
router.post('/signup', async (req, res) => {
  try {
      const dbUserData = await User.create(req.body);

      req.session.save(() => {
          req.session.logged_in = true;
          req.session.email = dbUserData.email;
          req.session.user_id = dbUserData.id;

          res.status(200).json(dbUserData);
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ 
      where: { 
        email: req.body.email 
      }, 
    });
    console.log(userData);
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password stored in the database
    const validPassword = await userData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;
      
      res.status(200)
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      // res.status(204).end();
      res.redirect('/login');
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
