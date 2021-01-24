const { Product } = require('../../models/')

const products = [
    {
        name: 'nice headphones',
        image_url: 'https://media.wired.com/photos/5e7164aeb9399f00096a2ae6/1:1/w_1800,h_1800,c_limit/Gear-Mont-Blanc-Smart-Headphones-Gold-Front-SOURCE-Mont-Blanc.jpg',
        price: 120000,
        stock: 5,
        createdAt: new Date(),
        category: 'electronics',
        updatedAt: new Date()
    },
    {
        name: 'macbook pro',
        image_url: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg',
        price: 2000000,
        stock: 1,
        category: 'electronics',
        createdAt: new Date(),
        updatedAt: new Date()
    }

]

const seedProducts = () => {
    return Product.bulkCreate(products, { individualHooks: true })
}

module.exports = seedProducts
