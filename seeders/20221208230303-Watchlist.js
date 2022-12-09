'use strict';
const falso = require('@ngneat/falso')
// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let watchlists = [...Array(40)].map((_) => ({
      watcher: falso.randNumber({min:2, max: 12}),
      being_watched: falso.randNumber({min:2, max: 12}),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('watchlists', watchlists)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('watchlists')
  }
}
