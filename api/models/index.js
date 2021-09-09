const User = require('./User')
const VideoGames = require('./VideoGames')
const Reviews = require('./Reviews')
const Orders = require('./Orders')
const Categories = require('./Categories')
const Cart = require('./Cart')

// ASOC USER-CART
// Cart tiene fk de user
User.hasMany(Cart)
Cart.belongsTo(User)

// ASOC VIDEOG-CART
// VideoGames tiene fk de cart
Cart.hasMany(VideoGames)
VideoGames.belongsTo(Cart)


// ASOC USER-REVIEWS
// Reviews tiene fk de user
User.hasMany(Reviews)
Reviews.belongsTo(User)

// ASOC VGAME - REVIEWS
// Reviews tiene fk de VideoGames
VideoGames.hasMany(Reviews)
Reviews.belongsTo(VideoGames)

// ASOC VGAME - CATEGORIES
// Tabla intermedia
VideoGames.belongsToMany(Categories, { through: 'categories-videogame' })
Categories.belongsToMany(VideoGames, { through: 'categories-videogame' })

// ASOC CART - ORDERS
// Order con id de Cart
Cart.hasOne(Orders)
Orders.belongsTo(Cart)

module.exports = { User, VideoGames, Reviews, Orders, Categories, Cart }