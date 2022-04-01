import Sequelize from "sequelize";
import { connection } from '../database/connection.js'

export const contos = connection.define('contos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false,


    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,


    },
    ano: {
        type: Sequelize.TEXT,
        allowNull: false,


    },
    img_reference: {
        type: Sequelize.TEXT,
        allowNull: false,


    },
    desc_short: {
        type: Sequelize.TEXT,
        allowNull: false,
    }

}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})