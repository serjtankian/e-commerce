const express = require("express");
const router = express.Router();
const { Cart, Orders, VideoGames, User } = require("../models/index");

const nodemailer = require("nodemailer");

//utils
const getGameNames = (arrGames) => {
  return arrGames.map((game) => {
    return game.name;
  });
};

// configurar envio de email confirmando la compra
const sendEmail = async (order, user, status) => {
  console.log(order.videogames);
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "maxwell.barton74@ethereal.email",
      pass: "SQw6GShE9QZaPYRwYC",
    },
  });
  let emailText = `
      <h1> Hola, ${user.name}! </h1>
      <p>Tu compra se encuentra en status ${status}</p>
      <h3>Detalles de tu compra:</h3>
      <ul>
      ${order.videogames.map((game) => `<li>${game}</li>`).join("")}
      </ul>
      <p>Total: $ ${order.price} USD</p>
      `;
  return transporter.sendMail({
    from: '"Steam Verde 👻" <steamVerde@ethereal.com>',
    to: user.email,
    subject: "Order status and details ✔",
    html: emailText,
  });
};

// Ruta de compra del carrito actual
router.post("/:userId", (req, res, next) => {
  let f = new Date();
  let fullDate = f.getDate() + "-" + f.getMonth() + "-" + f.getFullYear();

  Cart.findOne({
    where: { userId: req.params.userId, status: "open" },
    include: VideoGames,
  })
    .then((cart) => {
      cart.status = "close";
      cart.save();
      const games = getGameNames(cart.videogames);
      return [cart, games];
    })
    .then(([closedCart, games]) => {
      Orders.create({
        price: closedCart.price,
        date: fullDate,
        status: "pending",
        videogames: games,
      }).then((order) => {
        User.findByPk(req.params.userId).then(async (user) => {
          order.setCart(closedCart.id);
          order.setUser(parseInt(req.params.userId));
          await sendEmail(order, user, "pending");
          res.send(order);
        });
      });
    });
});

// Ruta para agregar la orden de compra luego de confirmarla



// Ruta que devuelva el historial de órdenes de compra de un usuario
router.get("/allFrom/:userId", (req, res, next) => {
  Orders.findAll({ where: { userId: req.params.userId } }).then((order) => {
    res.status(200).send(order);
  });
});

module.exports = router;
