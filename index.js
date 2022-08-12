const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ number: parseInt(process.env.NUMBER || 0) });
});

app.listen(PORT, () => {
  console.log(`Listening to Port ${PORT}`);
});
