const express =require('express');
const router = express.Router();
const taskController =require('../Controller/TaskController');
const { taskValidationRules, validateTask } = require('../utils/Validator.js');


router.post('/tasks/post',taskValidationRules(),validateTask, taskController.addTask);
router.get('/tasks/getAll', taskController.getTasks);
router.get('/tasks/getById/:id', taskController.getTasksById);
router.delete('/tasks/deleteById/:id', taskController.deleteTask);
router.patch('/tasks/update/:id',taskValidationRules(),validateTask,taskController.updateTask);

router.get('/tasks/filter', taskController.getFilteredTasks); 

module.exports = router;