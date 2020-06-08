const { Router } = require('express');
const TeamController = require('../controllers/TeamController');
const ReserveListConroller = require('../controllers/ReserveListController');

const teamsRouter = Router();

// Create Teams
teamsRouter.post('/', TeamController.createlist);
// Get list of Reverse players
teamsRouter.get('/reservelist', ReserveListConroller.getlist);
// Get List of Teams
teamsRouter.get('/', TeamController.index);

module.exports = teamsRouter;
