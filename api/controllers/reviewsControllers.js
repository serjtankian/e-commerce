const { Reviews } = require("../models/index");

const addReview = (req, res, next) => {
  Reviews.findOrCreate({
    where: { videogameName: req.body.videogameName, userId: req.params.userId },
    defaults: req.body,
  })
    .then((review) => {
      review[0].setVideogame(req.params.vgId);
      review[0].save();
      res.status(202).send(review[0]);
    })
    .catch(next);
};

module.exports = { addReview };

// http://localhost:3001/api/reviews/addreview/2/1

// {
//     "videogameName": "Portal 2",
//     "text": "asdasdasdadada",
//     "rate": 5
// }
