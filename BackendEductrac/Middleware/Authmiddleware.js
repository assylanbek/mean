const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      // Verify the token and decode its payload
      const decoded = jwt.verify(token.split(' ')[1], 'masai');
      
      if (decoded) {
        // Attach the decoded payload to the request object
        req.body.authorID = decoded.id;
        req.body.author = decoded.email;
        next();
      } else {
        res.status(401).json({ msg: 'Please login' });
      }
    } catch (error) {
      res.status(401).json({ msg: error.message });
    }
  } else {
    res.status(401).json({ msg: 'Please provide a token' });
  }
};

module.exports = {
  auth,
};
