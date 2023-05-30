const router = require('express').Router();
const { Location } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newLocation = await Location.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newLocation);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT route to update specific amenities for a location
router.put('/locations/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { hasFood, hasWifi, hasOutlets } = req.body;
  
      const location = await Location.findByPk(id);
  
      if (!location) {
        return res.status(404).json({ error: 'Location not found.' });
      }
  
      // Update specific amenities
      location.amenities.hasFood = hasFood;
      location.amenities.hasWifi = hasWifi;
      location.amenities.hasOutlets = hasOutlets;
  
      await location.save();
  
      res.json(location);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;

