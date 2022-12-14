'use strict';
const falso = require('@ngneat/falso')
// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let users = [...Array(10)].map((_) => ({
      handle: falso.randUserName(),
      city: falso.randCity(),
      alltime_level: falso.randNumber({min:2, max: 12}),
      current_level: falso.randNumber({min:2, max: 12}),
      high_ses_score: falso.randNumber({min:500, max: 1200}),
      total_score: falso.randNumber({min:4000, max: 20000}),
      passwordDigest: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
