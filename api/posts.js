const Joi = require("joi");
const express = require("express");
const router = express.Router();
const { Post } = require("../config/database");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

/* GET posts listing. */
router.get("/", (req, res, next) => {
  Post.findAll()
    .then(posts => res.status(200).send(posts))
    .catch(err => res.send("error " + err));
});

/* ADD post */
router.post("/", (req, res) => {
  // Validate Input
  const schema = {
    title: Joi.string()
      .min(3)
      .required()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // Prepare input data
  let { title, body, category } = req.body;

  // Input data to database
  Post.create({
    title,
    body,
    category
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

/* Return a specific Post */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Post.findById(id)
    .then(result => {
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("The post with the given id was not found");
      }
    })
    .catch(err => {
      res.status(500).send("Failed to request to database : " + err);
    });
});

/* Update a specific Post */
router.post("/:id/update", (req, res) => {
  let { id } = req.params;
  let { title, body, category } = req.body;

  Post.update({ title, body, category }, { where: { id } })
    .then(result => {
      const post = {
        id,
        title: title,
        body,
        category
      };
      res.status(200).send(post);
    })
    .catch(err => {
      res.send("error " + err);
    });
});

/* Delete a specific Post */
router.post("/:id/delete", (req, res) => {
  let id = req.params.id;

  Post.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).send("Berhasil delete");
    })
    .catch(err => {
      res.status(400).send("Error : " + err);
    });
});

/* Bulk Update Posts */
router.put("/", (req, res) => {});

/* Delete All Posts */
router.delete("/", (req, res) => {});

/* Method not allowed */
router.post("/:id", (req, res) => {
  res.sendStatus(405);
});

module.exports = router;
