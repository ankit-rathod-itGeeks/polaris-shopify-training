const jwt = require("jsonwebtoken");
exports.generateToken = (data) => {
  const token = jwt.sign({ ...data }, process.env.jwt_secret_key, {
    expiresIn: "1h",
  });

  if (token) {
    return token;
  }
};
