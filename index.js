import express from "express";
import pg from "pg";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// functions for different hht methods and routes
app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
