
const district = (sequelize, DataTypes) => {
  const tbl = sequelize.define('district', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 50,
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'state_id'
    }
  }, {
      paranoid: false,
      timestamps: false,
      underscored: true,
      underscoredAll: true,
      freezeTableName: true
    });
  return tbl;
};

export default district;


