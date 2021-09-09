const express = require('express')
const router = express.Router()
const { Cart, Orders, VideoGames } = require('../models/index')

//Ruta para mostrar los productos de un carrito
router.get("/singleCart/:id", (req,res,next) => {
    Cart.findOne({where:{id: req.params.id}, include: VideoGames})
    .then(cart => res.send(cart))
})



// Ruta para eliminar un producto del carrito



// Ruta para agregar un producto al carrito
router.post('/addCart/:gameId', (req, res, next)=> {
    Cart.findOrCreate({
        where: { status: "open", userId: req.user.id},
        defaults: {status :"open"}
    }).then(([cart, n]) => {
        console.log(cart)
        if(!cart.userId) cart.setUser(req.user.id);
        cart.addVideogame(req.params.gameId)
        cart.quantity += 1
        console.log(cart.quantity)
        res.send(cart)
    })
    .catch(next)
})

// Ruta para editar la cantidad del producto en el carrito
// router.post('/:orderID/add', (req, res, next)=> {
//     const { id } = req.params.orderID
//     Orders.findOrCreate({
//         where: { id },
//         defaults: req.body
//     }).then(order=> res.send(order))
// })

module.exports = router;