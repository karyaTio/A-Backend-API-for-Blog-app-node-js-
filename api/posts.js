var express = require("express");
var router = express.Router();
const { Post } = require("../config/database");

/* GET posts listing. */
router.get("/", (req, res, next) => {
  Post.findAll()
    .then(posts => res.json(posts))
    .catch(err => res.send("error " + err));
});

/* ADD Post */
router.post("/", (req, res) => {
  let { title, body, category } = req.body;

  // Validate

  Post.create({
    title,
    body,
    category
  })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

/* Bulk Update Posts */
router.put("/", (req, res) => {});

/* Delete All Posts */
router.delete("/", (req, res) => {});

/* Return a specific Post */
router.get("/:id", (req, res) => {});

/* Method not allowed */
router.post("/:id", (req, res) => {
  res.sendStatus(405);
});

/* Update a specific Post */
router.put("/:id", (req, res) => {
  let id = req.params.id;
  let { title, body, category } = req.body;

  Post.update({ title, body, category }, { where: { id } })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.send("error " + err);
    });
});

/* Delete a specific Post */
router.delete("/:id", (req, res) => {
  let id = req.params.id;

  Post.destroy({ where: { id } });
});
module.exports = router;
