const { Router } = require('express');
const NameTeamController = require('../controllers/NameTeamController');

const nameteamRouter = Router();

nameteamRouter.get('/', NameTeamController.index);
nameteamRouter.post('/', NameTeamController.create);

module.exports = nameteamRouter;
