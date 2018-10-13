import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;

export const getTransactions = (req, res) => {
  const userId = req.params.userId;
  logger.info(`get transaction: ${userId}`);
  const condition = {
    to: {
      [Op.eq]: userId
    }
  };
  dal.findByCondition(db.transaction, condition)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};


export const insertTransaction = (req, res) => {
  const body = dal.convertObject(req.body, 'transaction', 'post');
  logger.info(`post transaction: ${body}`);

  dal.insertData(db.transaction, body)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};
