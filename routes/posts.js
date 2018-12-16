const router = require("express").Router();
const {
  all,
  find,
  create,
  update,
  destroy,
  comments,
  createcomments,
  unknown,
  reject
} = require("../controllers/PostsController");

/*
 * GET  : api/posts/
 * desc : Getting all posts data
 */
router.get("/", all);

/*
 * POST : api/posts/
 * desc : Create a post
 */
router.post("/", create);

/*
 * GET  : api/posts/:id
 * desc : Getting a spesific post
 */
router.get("/:id", find);

/*
 * POST : api/:id/update
 * desc : Update a post with the given id
 */
router.post("/:id/update", update);

/*
 * POST : api/:id/delete
 * desc : Delete a post with the given id
 */
router.post("/:id/delete", destroy);

/*
 * GET  : api/posts/:id/comments
 * desc : Get all comment of spesific post
 */
router.get("/:id/comments", comments);

/*
 * POST : api/posts/:id/comments
 * desc : Create a comment for spesific post with the given id
 */
router.get("/:id/comments", createcomments);

/*
 * PUT  : api/posts
 * desc : Updating all the post
 * note : still not sure what the use of this route
 */
router.put("/", unknown);

/*
 * DELETE : api/posts
 * desc   : Delete all the post
 */
router.delete("/", unknown);

/*
 * POST : api/posts/:id
 * desc : Reject this request
 * note : Best practice of RESTful API
 */
router.post("/:id", reject);

module.exports = router;
