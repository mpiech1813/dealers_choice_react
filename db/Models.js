const { STRING } = require('sequelize');
const db = require('./db');

const Xenomorph = db.define('xenomorph', {
  name: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  growth: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  size: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  ability: {
    type: STRING,
    unique: true,
  },
});

// Which media did the alien type first appear in
const Media = db.define('media', {
  name: {
    type: STRING,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

// 1 alien type could have been in multiple media type
Media.hasMany(Xenomorph);
Xenomorph.belongsTo(Media);

module.exports = {
  Xenomorph,
  Media,
};
