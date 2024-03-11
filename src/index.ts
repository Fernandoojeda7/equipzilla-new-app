import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config().parsed;

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  console.log("Hello Equipzilla!");
  res.send("Welcome to Equipzilla Probando");
});

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
