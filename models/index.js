// Pulls the models from their file locations
const User = require('./User');
const Location = require('./Location');

// Ascribes a relationship between the two models

User.hasMany(Location, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Location.hasMany(User, {
  foreignKey: 'user_id'
});

// Exports the module
module.exports = { User, Location };