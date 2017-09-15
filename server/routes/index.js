const latest = require('../controllers/latest').latest;
const rootCtrl = require('../controllers/root').index;
const source = require('../controllers/source').source;
const users = require('../controllers/users').users;
const auth = require('../controllers/auth').auth;
const checkToken = require('../middlewares/checkToken');


module.exports = (app)=> {

  app.get('/', rootCtrl);
  
  app.post('/api/authenticate', auth);
  
  //apply middleware 
  app.use(checkToken);
  
  app.get('/api', rootCtrl);

  //Get latest exchange reference. Accept get params (currency, bank, data)(?currency=USD)
  app.get('/api/list', latest);

  app.get('/api/source', source);
  
  //return all users (GET http://localhost:8080/api/users)
  app.get('/api/users', users);

/*  app.get('/setup', function (req, res) {
    // create a sample user
    User.create({
      username: null,
      password: 'password'
    }).then(item => res.status(201).send(item))
      .catch(error => res.status(400).send(error));
  });*/

};