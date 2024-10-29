const {DataTypes} =require('sequelize')


const TaskModel = (sequelize) => {
    const Task = sequelize.define(
        'Tasks',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            task: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            completed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            timestamps: false, 
        }
    );

    return Task;
};

module.exports = TaskModel;