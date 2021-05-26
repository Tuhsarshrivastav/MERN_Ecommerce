const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "node.js", {
    expiresIn: "15d",
  });
};

module.exports = generateToken;
