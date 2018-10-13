import Sequelize from 'sequelize';

const orderDetail = (sequelize, DataTypes) => {
  const tbl = sequelize.define('order_detail', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    buyerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'buyer_id'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'seller_id'
    },

    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    note: {
      type: DataTypes.STRING,
      length: 5000
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


export default orderDetail;

    // status = {
    //   1: "Pending for seller's approval", 2: 'Approved by seller', 3: 'Shipped', 4: 'Out for delivery', 5: 'Delivered',
    //   6: 'Closed', 7: 'Cancelled by buyer', 8: 'Cancelled by seller'
    // }
    // action = {
    //   1: 'Approve', 2: 'Ship', 3: 'Out for delivery',
    //   4: 'Delivered', 5: 'Close', 6: 'Cancel(buyer)', 7: 'Cancel(seller)'
    // }
    // statusNextActionMap = {
    //   1: [[6], [1, 7]], 2: [[6], [2, 3, 7]], 3: [[6], [3, 4, 7]], 4: [[6], [4, 7]], 5: [[], [6]],
    //   6: [[], []], 7: [[], []], 8: [[], []]
    // }
    // actionStatusMap = { 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8 }
    // {
    //   1: [['Cancel'], ['Approve', 'Cancel']], 2: [['Cancel'], ['Ship', 'Out for delivery', 'Cancel']],
    //   3: [['Cancel'], ['Out for delivery', 'Delivered', 'Cancel']], 4: [['Cancel'], ['Delivered', 'Cancel']],
    //   5: [[], ['Close']], 6: [[], []], 7: [[], []], 8: [[], []]
    // }
