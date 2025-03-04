import express from "express";
import cors from "cors";

import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "./controllers/posts.js";
import "./db/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// functions for different hht methods and routes
// app.route() helps us define handlers for different HTTP methods on the same route
app.route("/posts").get(getPosts).post(createPost);
app.route("/posts/:id").get(getPostById).put(updatePost).delete(deletePost);

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
