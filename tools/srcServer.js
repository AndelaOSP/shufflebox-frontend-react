import express from "express";
import morgan from "morgan";
import webpack from "webpack";
import path from "path";
import open from "open";

const config = require('../webpack.config.dev.js');
/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

// app logger
app.use(morgan("dev"));
app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: '/'
  })
);

app.use(express.static(path.join(__dirname + "/client")));


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
