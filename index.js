import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// import http from "http";

// const requestHandler = (req, res) => {
//   const { method, url } = req;
//   console.log(method, url);
// };

// const server = http.createServer(requestHandler);

// const port = 3001;
// server.listen(port, () =>
//   console.log(`Server running at http://localhost:${port}/`)
// );
