import Sequelize from 'sequelize';

const friendRequest = (sequelize, DataTypes) => {
  const tbl = sequelize.define('friend_request', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    from: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    to: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
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


export default friendRequest;
//status 1 peding 2 approve 3 reject
