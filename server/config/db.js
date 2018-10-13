'use strict'

import Sequelize from 'sequelize';
import env from './env';
import appuser from '../models/appuser.js';
import transaction from '../models/transaction.js';
import friendRequest from '../models/friendRequest.js';
import notification from '../models/notification.js';

const Op = Sequelize.Op;
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    dialect: env.DATABASE_DIALECT,
    operatorsAliases: Op,
    define: {
        underscored: true
    },

    storage: env.DATABASE_PATH
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.appuser = appuser(sequelize, Sequelize);
db.transaction = transaction(sequelize, Sequelize);
db.friendRequest = friendRequest(sequelize, Sequelize);
db.notification = notification(sequelize, Sequelize);

db.transaction.belongsTo(db.appuser, { foreignKey: 'spender' });
db.appuser.hasMany(db.transaction, { foreignKey: 'spender' });

db.transaction.belongsTo(db.appuser, { foreignKey: 'ower' });
db.appuser.hasMany(db.transaction, { foreignKey: 'ower' });


db.notification.belongsTo(db.appuser, { foreignKey: 'from' });
db.appuser.hasMany(db.notification, { foreignKey: 'from' });

db.notification.belongsTo(db.appuser, { foreignKey: 'to' });
db.appuser.hasMany(db.notification, { foreignKey: 'to' });


db.friendRequest.belongsTo(db.appuser, { foreignKey: 'from' });
db.appuser.hasMany(db.friendRequest, { foreignKey: 'from' });

db.friendRequest.belongsTo(db.appuser, { foreignKey: 'to' });
db.appuser.hasMany(db.friendRequest, { foreignKey: 'to' });

export default db;
