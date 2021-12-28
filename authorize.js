const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "ban") {
    req.user = { name: "ban", id: 1 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
