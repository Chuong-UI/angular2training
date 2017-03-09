const express = require('express');
const passport = require('passport');

module.exports = function(app) {
  // app.get('/login', AuthController.login);
  // app.get('/logout', AuthController.logout);
  // app.get('/auth/:provider', AuthController.provider);
  // app.get('/auth/:provider/callback', AuthController.callback);
  // app.post('/auth/local', AuthController.callback);
  // app.post('/auth/jwt', AuthController.jwtLogin);
  app.post('/register', UserController.register);

  // app.get('/confirm/:token', TokenController.verifyEmail);

  let apiRoutes = express.Router();
  apiRoutes.get('/users', UserController.getAll);
  // apiRoutes.use(passport.authenticate('jwt', {session: false}));
  // apiRoutes.use(AuthController.ensureAuth);

  // apiRoutes.get('/messages', MessageController.findAll);
  // apiRoutes.get('/messages/:id', MessageController.findOne);
  // apiRoutes.get('/users/:userId/messages', MessageController.findByUser);
  // apiRoutes.post('/messages', MessageController.create);
  // apiRoutes.put('/messages/:id', MessageController.update);

  // apiRoutes.get('/messages/:messageId/comments', CommentController.findAll);
  // apiRoutes.post('/messages/:messageId/comments', CommentController.create);

  // apiRoutes.get('/users/astrologers', UserController.getAstrologers);

  // apiRoutes.post('/generate-event', NotificationController.generateEvent);

  app.use('/', apiRoutes);
};