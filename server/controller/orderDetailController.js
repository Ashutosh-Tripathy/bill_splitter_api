import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
const getBuyerSellerCondition = (id) => ({
  [Op.or]: [
    {
      buyer_id: {
        [Op.eq]: id
      }
    },
    {
      seller_id: {
        [Op.eq]: id
      }
    }
  ]
});

export const getOrderDetail = (req, res) => {
  const userId = req.params.userId;
  const orderId = req.params.orderId;
  logger.info(`get orderDetail: ${orderId}`);

  dal.findById(db.orderDetail, orderId, getBuyerSellerCondition(userId))
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const getOrders = (req, res) => {
  const userId = req.params.userId;
  logger.info(`get orderDetails: userId=${userId}`);
  let condition = {};

  dal.findByRawQuery(`SELECT order_detail.id, buyer_id AS buyerId, seller_id AS sellerId, status, note, order_detail.created_at,
            order_detail.updated_at, order_detail.deleted_at, buyer_id, seller_id , u1.name as buyerName, u2.name AS sellerName
            FROM order_detail AS order_detail
            inner join user_detail AS u1 on order_detail.buyer_id = u1.id
            inner join user_detail AS u2 on order_detail.seller_id = u2.id
            WHERE ((order_detail.deleted_at IS NULL)
            AND (order_detail.buyer_id = :id OR order_detail.seller_id = :id))
            ORDER BY order_detail.created_at DESC;`,
    { id: userId })
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const insertOrderDetail = (req, res) => {
  const userId = req.params.userId;
  const body = dal.convertObject(req.body, 'orderDetail', 'post');
  logger.info(`post orderDetail: ${JSON.stringify(body)}`);
  if (req.body && req.body.buyerId != userId) {
    logger.warn(`post orderDetail: user ${userId} tried to insert data as user ${req.body.buyer_id}.`);
    res.status(500).json({
      message: 'Error occoured. Please try again later.'
    });
  } else {
    dal.insertData(db.orderDetail, body)
      .then(({
        data,
        statusCode
      }) => {
        res.status(statusCode).json(data);
      });
  }
};

export const updateOrderDetail = (req, res) => {
  const userId = req.params.userId;

  const orderId = req.params.orderId;
  const body = dal.convertObject(req.body, 'orderDetail', 'patch');
  logger.info(`patch orderDetail: ${JSON.stringify(body)}`);

  dal.updateById(db.orderDetail, body, orderId, getBuyerSellerCondition(userId))
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};


// if (buyer_id) {
  //   condition.buyer_id = {
  //     [Op.eq]: buyer_id
  //   };
  // }

  // if (seller_id || !buyer_id) {
  //   condition.seller_id = {
  //     [Op.eq]: seller_id
  //   };
  // }

  // dal.findByCondition(db.orderDetail, getBuyerSellerCondition(userId), [
  //   ['created_at', 'DESC']
  // ])
