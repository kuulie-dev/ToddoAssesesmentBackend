
const db = require('../models/index');

const TaskModel = db.TaskModel;

const createTask = async (task ,completed) => {

     const postdata =  await  TaskModel.findOrCreate( { 
        where: { task: task },    
        defaults: {                   
            task: task,
            completed: completed || false
        }});
     return postdata
};

const 
FindTaskById = async (taskId) => {

    const task= TaskModel.findByPk(taskId)
    return task
};

const getAllTasks = async (page, limit) => {
    const offset = (page - 1) * limit;
    return await TaskModel.findAndCountAll({
        limit: parseInt(limit),
        offset: parseInt(offset),
    });
};

const deleteTask = async (taskId) => {
   return await TaskModel.destroy({ where: { id: taskId } });
};


const updateTask = async (taskId, taskData) => {
    return await TaskModel.update(taskData, {
        where: { id: taskId },
    });
};

const getFilteredTasks = async (completed) => {
    return await TaskModel.findAll({
        where: completed !== null ? { completed } : {}, 
    });
};


module.exports={
    createTask,
    getAllTasks,
    deleteTask,
    updateTask,
    FindTaskById,
    getFilteredTasks
}