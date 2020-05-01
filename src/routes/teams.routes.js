const { Router } = require('express');
const TeamController = require('../controllers/TeamController');
const ReserveListConroller = require('../controllers/ReserveListController');

const teamsRouter = Router();

teamsRouter.post('/', TeamController.createlist);
teamsRouter.get('/reservelist', ReserveListConroller.getlist);
teamsRouter.get('/', TeamController.index);

module.exports = teamsRouter;
