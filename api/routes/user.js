const { User } = require('../models/index')
const express = require("express");
const router = express.Router();
const passport = require("passport");

const {isSAdmin} = require("../controllers/usersControllers")

// Ruta para registro
router.post("/register", (req, res, next) => {
  const { email } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: req.body,
  })
    .then((user) => res.status(201).send(user))
    .catch(next);
});

// Ruta para login
router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user);
});

// Ruta para logout
router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});


// Ruta para editar un usuario

router.put("/:email", (req, res) => {
  const { email } = req.params;
  User.update(req.body, { where: { email }, returning: true }).then(
    ([n, user]) => {
      user[0].hashPw(user[0].password, user[0].salt)
      .then(hash =>{
        user[0].password = hash
        user[0].save()
        res.status(201).send(user[0]);
      })
    }
  );
});


// Ruta que devuelva el usuario loggeado en caso de que haya
// router.get("/auth/me", (req, res) => {
//   User.findByPk(req.user.id)
//     .then((user) => res.send(user))
//     .catch(() => res.sendStatus(404));
// });

// Ruta para promover administradores (admin)
router.put("/promove/:id", isSAdmin, (req, res, next) =>{
  //es Super Admin?
  console.log(req.body)
  User.update(req.body, {where: {id: req.params.id}, returning: true})
  .then(([n, user]) => {
    res.status(201).send(user[0])
  }).catch(next)
  
})

// ruta para eliminar un usuario (admin)
router.delete('/delete/:id',isSAdmin, (req, res, next)=> {
  User.destroy({
    where: { id: req.params.id}
  }).then(()=> {
    res.sendStatus(202)
  }).catch(next)
})

// ruta para ver todos los usuarios (admin)
router.get("/", isSAdmin, (req, res, next) => {
  User.allExceptsMe(req.user.id)
    .then((users) => {
    if(!users) res.send([]).end()
    res.status(200).send(users)})
    .catch(next);
});


module.exports = router