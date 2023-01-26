const express = require("express");
const path = require("path");

var app = express();
const PORT = normalizePort(process.env.PORT || "5000");

app.use(express.json()).use(express.urlencoded({ extended: false }));

/**
 * * Front React
 */
app
  .use(express.static(path.join(__dirname, "./build")))
  .get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "./build/index.html"))
  );

/**
 * Listen
 */
app.listen(PORT);

/**
 * Get port from environment and store in Express.
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val; // pipe
  }
  if (port >= 0) {
    return port; // port
  }
  return false;
}
