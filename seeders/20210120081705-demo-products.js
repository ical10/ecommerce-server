'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [
      {
        name: 'nice headphones',
        image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
        price: 120000,
        category: 'electronics',
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'macbook pro',
        image_url: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg',
        price: 2000000,
        stock: 5,
        category: 'electronics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tesla model 3',
        image_url: 'https://images.hindustantimes.com/auto/img/2020/10/17/600x338/Model_3_1_1602909794983_1602909801097.JPG',
        price: 1000000000,
        category: 'cars',
        stock: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sendal swallow',
        image_url: 'https://id-test-11.slatic.net/p/3bb381834e69a2533fd934369dcc73ec.jpg_340x340q80.jpg_.webp',
        price: 10000,
        stock: 1000,
        category: 'footwear',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'semprong nutella',
        image_url: 'https://id-test-11.slatic.net/p/34cc70235b571a58e78dbe3a8a493e94.png',
        price: 50000,
        stock: 20,
        category: 'food',
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {})
  }
};
