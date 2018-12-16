const Joi = require("joi");
const { Post } = require("../models");

module.exports = {
  all: (req, res) => {
    Post.all()
      .then(posts => {
        res.status(200).json({
          message: "Success getting all posts",
          data: posts
        });
      })
      .catch(err => {
        if (err.errors[0].message) {
          res.status(403).json({
            message: err.errors.message
          });
        } else {
          res.status(500).json({
            message: "Something went wrong"
          });
        }
      });
  },
  find: (req, res) => {
    const { id } = req.params;

    Post.findById(id)
      .then(post => {
        if (post) {
          res.status(200).json({
            message: "Success getting post",
            data: post
          });
        } else {
          res.status(404).json({
            message: "No post with the given id found",
            data: post
          });
        }
      })
      .catch(err => {
        if (err.errors[0].message) {
          res.status(403).json({
            message: err.errors.message
          });
        } else {
          res.status(500).json({
            message: "Something went wrong"
          });
        }
      });
  },
  create: (req, res) => {
    // Validate Input
    const schema = {
      title: Joi.string()
        .min(3)
        .required(),
      body: Joi.string().required(),
      category: Joi.string().required()
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
      .then(post => {
        res.status(200).json({
          message: "Success Creating post",
          data: post
        });
      })
      .catch(err => {
        if (err.errors[0].message) {
          res.status(403).json({
            message: err.errors.message
          });
        } else {
          res.status(500).json({
            message: "Something went wrong"
          });
        }
      });
  },
  update: (req, res) => {
    let { id } = req.params;
    let { title, body, category } = req.body;

    Post.update({ title, body, category }, { where: { id } })
      .then(() => {
        const post = {
          id,
          title: title,
          body,
          category
        };
        res
          .status(200)
          .json({ message: "Successs Updating a post", data: post });
      })
      .catch(err => {
        if (err.errors[0].message) {
          res.status(403).json({
            message: err.errors.message
          });
        } else {
          res.status(500).json({
            message: "Something went wrong"
          });
        }
      });
  },
  destroy: (req, res) => {
    const { id } = req.params;
    Post.findOne({ where: { id } })
      .then(post => {
        post
          .destroy()
          .then(() => {
            res.status(200).json({ message: "Berhasil delete", data: post });
          })
          .catch(err => {
            if (err.errors[0].message) {
              res.status(403).json({
                message: err.errors.message
              });
            } else {
              res.status(500).json({
                message: "Something went wrong"
              });
            }
          });
      })
      .catch(err => {
        if (err.errors[0].message) {
          res.status(403).json({
            message: err.errors.message
          });
        } else {
          res.status(500).json({
            message: "Something went wrong"
          });
        }
      });
  },
  unknown: (req, res) => {
    res.status(500).json({ message: "Something went wrong" });
  },
  reject: (req, res) => {
    res.sendStatus(405);
  }
};
