import express from "express";
import morgan from "morgan";
const app = express();
app.use(express.json());
app.use(morgan("dev"));

const PORT = 5000;

app.get("/", (_req, res) => {
  console.log("Hello Equipzilla!");
  res.send("Welcome to Equipzilla");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
