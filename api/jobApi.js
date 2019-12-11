const express = require("express");
const router = express.Router();
const Offre = require("../models/offre");
const User = require("../models/user");

// Les relations entre les deux tables
User.hasMany(Offre);
Offre.belongsTo(User);

//Retourner la liste des offres
router.get("/", function(req, res, next) {
  Offre.findAll()
    .then(offres => {
      res.json(offres);
    })
    .catch(err => {
      res.send(err);
    });
});

//Retourner l'offre par Id
router.get("/:id", function(req, res, next) {
  Offre.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(offre => {
      if (offre) {
        res.json(offre);
      } else res.send("offre does not exist");
    })
    .catch(err => {
      res.send(err);
    });
});

//Ajouter une offre
router.post("/", function(req, res, next) {
  Offre.create(req.body)
    .then(offre => {
      res.send(offre);
    })
    .catch(err => {
      res.send(err);
    });
});

//Supprimer une offre
router.delete("/:id", function(req, res, next) {
  Offre.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.send("offre deleted");
    })
    .catch(err => {
      res.send(err);
    });
});

//Modifier une offre
router.put("/:id", function(req, res, next) {
  Offre.update(
    { title: req.body.title, content: req.body.content },
    { where: { id: req.params.id } }
  )
    .then(() => {
      res.send("offre updated");
    })
    .catch(err => {
      res.send(err);
    });
});

//Retourner les offres par utilisateur
router.get("/user/:id", function(req, res, next) {
  User.findAll({
    where: { id: req.params.id },
    include: [{ model: Offre, as: "offres" }]
  })
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.send(err);
    });
});

//Affecter une offre à un utilisateur

router.put("/user/:idUser", function(req, res, next) {
  Offre.update({ userId: req.params.idUser }, { where: { id: req.body.id } })
    .then(() => {
      res.send("offre added to user");
    })
    .catch(err => {
      res.send(err);
    });
});

//Affecter une offre à un utilisateur

router.put("/user/:idUser", function(req, res, next) {
  Offre.update({ userId: req.params.idUser }, { where: { id: req.body.id } })
    .then(() => {
      res.send("offre added to user");
    })
    .catch(err => {
      res.send(err);
    });
});

//Supprimer une offre affecter à un utilisateur

router.delete("/user/:idUser", function(req, res, next) {
  Offre.destroy({ where: { id: req.body.id, UserId: req.params.idUser } })
    .then(() => {
      res.send("offre deleted successfuly");
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
