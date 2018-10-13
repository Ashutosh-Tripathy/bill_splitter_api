import Sequelize from 'sequelize';

const transaction = (sequelize, DataTypes) => {
  const tbl = sequelize.define('transaction', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    spender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ower: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 200
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


export default transaction;
