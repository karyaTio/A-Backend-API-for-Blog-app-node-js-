"use strict";

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      category: DataTypes.STRING
    },
    { underscored: true }
  );
  Post.associate = function(models) {
    Post.hasMany(models.Comment);
  };
  return Post;
};
