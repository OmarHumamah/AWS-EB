"use strict";

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('the sever is working ');
});

app.listen(PORT, () => {
  console.log(`app is running on ${PORT}`);
});
