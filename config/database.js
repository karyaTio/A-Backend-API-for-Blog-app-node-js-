const Sequelize = require("sequelize");
const PostModel = require("../models/Post");

const sequelize = new Sequelize("db_blog", "tio", "mysql", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Post = PostModel(sequelize, Sequelize);

module.exports = { Post };
