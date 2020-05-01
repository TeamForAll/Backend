const { Router } = require('express');
const UserController = require('../controllers/UserController');

const playersRouter = Router();

playersRouter.post('/', UserController.store);
playersRouter.get('/', UserController.index);

module.exports = playersRouter;
