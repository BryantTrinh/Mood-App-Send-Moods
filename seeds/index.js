const seedEmojis = require('./emoji-seeds');
const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedEmojis();
  console.log('\n----- EMOJIS SEEDED -----\n');

  process.exit(0);
};

seedAll();