// Can we use a class as controller instead ?

const { Post } = require("../models/Post");

class PostController {
  getAll(req, res) {
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
  }
}

module.exports = PostController;
