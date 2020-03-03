module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
      return res.status(403).send({
        error: 'User must have credits to perform this operation.'
      });
    }
  
    next();
  };
  