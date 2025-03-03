import { DataTypes } from "sequelize"; // The library provides an object to help you  define types for your model attributes.
import sequelize from "../db/index.js"; // See we needed this

// Define the Post model
const Post = sequelize.define("Post", {
  // Model attributes are defined here
  author: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Post.sync(); // Check the block about Model synchronization

export default Post;
