const TaskService = require('../Services/TaskService');

exports.addTask = async (req, res) => {

    const {task,completed}= req.body

    try {
        const newTask = await TaskService.createTask(task, completed);
        res.status(201).json({newTask});
    } catch (error) {
    
        res.status(500).json({ error: error.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; 
        const tasks = await TaskService.getAllTasks(page, limit);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await TaskService.deleteTask(req.params.id);
        res.status(204).json({"dd":`deleted sucessfully ${req.params.id}`});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getTasksById = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const task = await TaskService.FindTaskById(id);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            return res.status(200).json(task);
        }

        const tasks = await TaskService.getAllTasks(page, limit);
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params; 
        if (!id) {
            return res.status(400).json({ message: 'Task ID is required' });
        }

        const { task, completed } = req.body; 
        const updatedTask = await TaskService.updateTask(id, { task, completed });
        if (updatedTask[0] === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getFilteredTasks = async (req, res) => {
    try {
        const { completed,page=1,limit=10 } = req.query; 
        let filter = null;

        if (completed === 'true') {
            filter = true;
        } else if (completed === 'false') {
            filter = false;
        }

        const tasks = await TaskService.getFilteredTasks(filter,page,limit);
        res.status(200).json({"rows":tasks});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
};