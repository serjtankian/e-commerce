const { User } = require('../models/index')
const express = require("express");
const router = express.Router();
const passport = require("passport");

router.post("/register", (req, res, next) => {
  const { email } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: req.body,
  })
    .then((user) => res.status(201).send(user))
    .catch(next);
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

// router.put("/:email", (req, res) => {
//   const { email } = req.params;
//   User.update(req.body, { where: { email }, returning: true }).then(
//     ([n, user]) => {
//       res.status(201).send(user[0]);
//     }
//   );
// });

router.get("/auth/me", (req, res) => {
  User.findByPk(req.user.id)
    .then((user) => res.send(user))
    .catch(() => res.sendStatus(404));
});

module.exports = router