"use strict";

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      post_id: DataTypes.INTEGER,
      body: DataTypes.STRING
    },
    { underscored: true }
  );
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post, { foreignKey: "post_id" });
  };
  return Comment;
};
