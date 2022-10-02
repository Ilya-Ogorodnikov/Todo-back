const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  changeTaskText,
  changeTaskCheck,
  deleteTask,
  deleteAllTask
} = require('../controllers/tasks.controller');


router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTask);
router.patch('/updateTaskText', changeTaskText);
router.patch('/updateTaskCheck', changeTaskCheck);
router.delete('/deleteTask', deleteTask);
router.delete('/deleteAllTask', deleteAllTask);

module.exports = router;