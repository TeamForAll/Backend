const { Router } = require('express');
const UserController = require('./controllers/UserController');
const TeamController = require('./controllers/TeamController');
const ReserveListConroller = require('./controllers/ReserveListController');
const NameTeamController = require('./controllers/NameTeamController');

const routes = Router();

routes.get('/players', TeamController.getlist);
routes.get('/reservelist', ReserveListConroller.getlist);
routes.post('/players', UserController.store);
routes.post('/teamname', NameTeamController.create);
routes.get('/teams', TeamController.index);

module.exports = routes;
