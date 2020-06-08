const { Router } = require('express');
const { celebrate, Joi, Segments, errors } = require('celebrate');
const UserController = require('../controllers/UserController');

const playersRouter = Router();

playersRouter.use(errors());
// send the player name
playersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({ name: Joi.string().required() }),
  }),
  UserController.store,
);
// Get player list
playersRouter.get('/', UserController.index);

module.exports = playersRouter;
