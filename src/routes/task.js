const { Router } = require('express');

const { getAllTasks, getTaskByID, postTask, putTask, deleteTask } = require('../controllers/task');
const { createTask, updateTask } = require('../middlewares/validations');


const router = Router();

router.get('/', getAllTasks );

router.get('/:id', getTaskByID );

router.post('/', createTask, postTask );

router.put('/:id', updateTask, putTask );

router.delete('/:id', deleteTask );

module.exports = router;