const express = require('express');
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddleware');
const router = express.Router();

router.get('/usuarios', tasksController.getAll);
router.post('/usuarios', taskMiddleware.validateBody, tasksController.createUsuarios);
router.delete('/usuarios/:id', tasksController.deleteUsuarios);
router.put('/usuarios/:id', taskMiddleware.validateBody, tasksController.updateUsuarios);

module.exports = router;