// Finished

const router = require('express').Router();

const { User } = require('../../models');

// POST '/' , session.save, 
// POST 'login', 
// POST '/logout/

// Creating username and password, passing through req.body. Middleware to be added in server.js

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create
      username: req.body.username,
      password: req.body.password,
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
  });

// req.session.save for  updating session data in the session store and have it persist across requests. Also requires middleware in server.js

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.expires = newUser.expires;
      req.session.loggedIn = true;
    }

    res.json(newUser);
  });


  // post for login, make async wait while it searches for the login username in database.

  router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      
      if (!user) {
        res.status(400).json({
          message: 'Username was not found, please try again'});
          return;
        });

        const validPassword = user.CheckPassword(req.body.password);

        if (!validPassword) {
          res.status(400).json({
            message: 'You have entered in your password incorrectly'})
            return;
          }

          // save session if everything is valid

          req.session.save(() => {
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.expires = newUser.expires;
            req.session.loggedIn = true;

            res.json({ user, message: 'You have logged in successfully!'});
          });
        } catch (err) {
          res.status(400).json({ 
            message: 'account is not found'
          });


// logout and add callback method req.session.destroy. 204 indicates (no content) and no response body. 404 indicates requested resource is not found on the server.

router.post('/logout'. (req, res) => {
  if(req.session.loggedIn) {
    req.session.destory(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports.router;