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
VideoGames.belongsToMany(Categories)
Categories.belongsToMany(VideoGames)

// ASOC CART - ORDERS
// Order con id de Cart
Cart.hasOne(Orders)
Orders.belongsTo(Cart)

module.exports = { User, VideoGames, Reviews, Orders, Categories, Cart }