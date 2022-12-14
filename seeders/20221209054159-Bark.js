'use strict';
const falso = require('@ngneat/falso')
// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let barks = [...Array(40)].map((_) => ({
      bark: falso.randUserName(),
      handle: falso.randCatchPhrase(),
      barker: falso.randNumber({min:1, max: 12}),
      barked: falso.randNumber({min:1, max: 12}),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('barks', barks)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('barks')
  }
}