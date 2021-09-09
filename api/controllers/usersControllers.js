const { User } = require('../models/index')

const isSAdmin = (req, res, next) => {
   if(req.user){
    User.findByPk(req.user.id)
    .then(user => {
        if(user.isAdmin === "SAdmin"){
            console.log("is Super Admin")
            next()
        }else{
            res.sendStatus(401).end()
        }
    })
   }
}

module.exports = {
    isSAdmin
}
