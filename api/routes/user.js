const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  isSAdmin,
  register,
  login,
  logout,
  editUser,
  toAdmin,
  deleteUser,
  allUsers,
} = require("../controllers/usersControllers");

// Ruta para registro
router.post("/register", register);

// Ruta para login
router.post("/login", passport.authenticate("local"), login);

// Ruta para logout
router.post("/logout", logout);

// Ruta para editar un usuario
router.put("/:email", editUser);

// Ruta para promover administradores (admin)
//en el body tienen que enviar {isAdmin: "Admin"}
router.put("/promove/:id", isSAdmin, toAdmin);

// ruta para eliminar un usuario (admin)
router.delete("/delete/:id", isSAdmin, deleteUser);

// ruta para ver todos los usuarios (admin)
router.get("/", isSAdmin, allUsers);

module.exports = router;
