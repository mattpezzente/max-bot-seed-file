const faker = require('faker');
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface) => {
    const members = [];
    for (let i = 0; i < 1000;) {
      members.push({
        discorduser: faker.fake('{{random.number}}'),
        email: faker.fake('{{internet.email}}'),
        uuid: uuidv4(),
        verified: 0,
      });
      i += 1;
    }
    return queryInterface.bulkInsert('Members', members);
  },

  down: queryInterface => queryInterface.bulkDelete('Members', null),
};
