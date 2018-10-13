import Sequelize from 'sequelize';

const appuser = (sequelize, DataTypes) => {
  const tbl = sequelize.define('appuser', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 100
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 50
    },
    mobile: {
      type: DataTypes.INTEGER,
      length: 10,
      validate: {
        min: 6000000000,
        max: 9999999999
      }
    }
  }, {
      paranoid: true,
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true
    });
  return tbl;
};


export default appuser;
