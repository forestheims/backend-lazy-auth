const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const { session } = req.cookies;
  try {
    const payload = jwt.verify(session, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    error.message = 'You must be signed in to continue';
    error.status = 401;
    next(error);
  }
};
