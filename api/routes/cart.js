const express = require('express')
const router = express.Router()
const { Cart, Orders, VideoGames, CartVideoGames } = require('../models/index')

//Ruta para mostrar los productos de un carrito
router.get("/singleCart/:id", (req,res,next) => {
    Cart.findOne({where:{id: req.params.id}, include: VideoGames})
    .then(cart => res.send(cart))
})



// Ruta para eliminar un producto del carrito



// Ruta para agregar un producto al carrito
router.post('/addCart/:gameId', (req, res, next)=> {
    //necesitamos por body la cantidad de juegos (quantity)

    //parseamos la quantity
    let quantity = parseInt(req.body.quantity);

    
    //buscamos el video juego por el id que llega de rq.params
    VideoGames.findByPk(req.params.gameId).then(game => {
        
        // multiplicamos el precio por la cantidad de vidiojuegos agregados
       let newPrice = game.price * quantity

       //retorno el total y el objeto juego de la base de datos
       return [newPrice, game]
    })
    .then(([newPrice, game]) =>{

        //busco un carrito que este open y sea del usuario loggeado
        Cart.findOne({where: {status: "open", userId: req.user.id}})
        .then(cart => {

            //si el carrito no existe va a ser undefined y entra en el if
            if(!cart){
                console.log("no hay cart, tenemos que crear")

                //creamos un cart nuevo con status abierto, la cantidad de productos que agrego el cliente y el precio total
                Cart.create({status: "open", quantity, price: newPrice})
                .then(newCart => {

                    //vinculamos el carrito creado al usuario loggeado con magic methods de sequelize
                    newCart.setUser(req.user.id)

                    //vinculamos el videojuego al carrito con magic methods de many to many assossiations y seteamos la cantidad de video juegos agregados
                    newCart.addVideogame(game, { through: { amountOfGames: quantity } })

                    //lo enviamos por respuesta al carrito
                    res.send(newCart)
                })
            }else{
                // si el carrito ya existia entra aca
                console.log("conseguimos vamos a updatear")

                //al precio que ya tenia le suma el nuevo que entro (newPrice linea 27)
                let createdPrice = cart.price + newPrice;

                //le suma a la cantidad que ya tenia el carrito la nueva cantidad que entro 
                let newQuantity = cart.quantity + quantity;
                
                //updateamos los datos del carrito a los nuevos
                Cart.update({quantity: newQuantity, price: createdPrice}, {where: {id: cart.id}, returning: true}).then(([n, updatedCart]) => {
                    
                    //seteamos la relacion del carrito al nuevo video juego
                    updatedCart[0].addVideogame(game, { through: { amountOfGames: quantity } })

                    //respondemos con el carrito con nuevos datos
                    res.send(updatedCart[0])

                })
              
            }
        })

    })
})

// Ruta para editar la cantidad del producto en el carrito
router.put('/increaseProduct/:gameId', (req, res, next)=> {

    Cart.findOne({where: {status: "open", userId: req.user.id}})
    .then(cart => {
        CartVideoGames.findOne({where: {cartId: cart.id, videogameId: req.params.gameId}})
        .then(cartVideoG => {
            cartVideoG.amountOfGames ++
        })
    })
})

module.exports = router;