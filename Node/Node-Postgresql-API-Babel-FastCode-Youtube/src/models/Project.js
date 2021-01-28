import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Task from './Task';

const Project = sequelize.define('project',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Project.hasMany(Task,{
    foreignKey: 'projectId',
    sourceKey: 'id'
});

export default Project;