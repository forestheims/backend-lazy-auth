module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'
  try {
    const user = req.user;
    if (user.email !== 'admin') {
      throw new Error('You do not have access to view this page');
    }
    next();
  } catch (error) {
    error.status = 403;
    next(error);
  }
};
