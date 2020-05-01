const { Router } = require('express');

const nameteamsRouter = require('./nameteams.routes');
const playersRouter = require('./players.routes');
const teamsRouter = require('./teams.routes');

const routes = Router();

routes.use('/teamname', nameteamsRouter);
routes.use('/players', playersRouter);
routes.use('/teams', teamsRouter);

module.exports = routes;
