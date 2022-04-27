"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let data = require("../data/phone.json");

    data.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Phones", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Phones", null, {});
  },
};
