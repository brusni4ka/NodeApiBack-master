/**
 * Created by kate on 31/01/17.
 */
const jwt = require('jsonwebtoken');
const jwtConfig = require('../jwt-config');
const User = require('../models').User;


module.exports.auth = (req, res)=> {
  // find the user
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        res.status(400).json({success: false, message: 'Authentication failed. User not found.'});
      } else if (user) {
        // check if password matches
        if (user.password != req.body.password) {
          res.status(400).json({success: false, message: 'Authentication failed. Wrong password.'});
        } else {
          // if user is found and password is right
          // create a token
          var token = jwt.sign({username: user.username, password: user.password}, jwtConfig.secretKey);
          // return the information including token as JSON
          res.status(200).json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }

      }
    })
    .catch(error => res.status(400).send(error));
}