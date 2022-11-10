// external imports
import dotenv from "dotenv";
import express from "express";

// initializing port
const port = (process.env.PORT || 4000) as number;

// initializing app
const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// displaying random response
app.get("/", (req, res) => {
  res.send({
    message: "Welcome Here",
  });
});

// listening to the server
app.listen(port, () => {
  `Server running at http://localhost:${port}`;
});
