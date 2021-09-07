const S = require('sequelize')
const sequelize = require('../db')

class Reviews extends S.Model{}
Reviews.init({
    username: {
        type: S.STRING
    },
    videogame: {
        type: S.STRING
    },
    text: {
        type: S.STRING
    },
    rate: {
        type: S.INTEGER
    }
}, { sequelize, modelName: 'reviews' })

module.exports = Reviews