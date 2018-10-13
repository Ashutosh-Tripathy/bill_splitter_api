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
  body.spender = req.body.userId;
  logger.info(`post transaction: ${JSON.stringify(body)}`);
  if (!Array.isArray(body.owers) || !body.owers.length === 0) {
    res.status(400).json({
      message: 'Error occoured. Please try again later.'
    });
  } else {
    body.amount = body.amount / (body.owers.length + 1);

    for (let index = 0; index < body.owers.length; index++) {
      body.ower = body.owers[index];
      dal.insertData(db.notification, {
        'to': body.ower, 'from': body.spender,
        'type': 1
      })
        .catch((err) => {
          res.status(500).message('Error occoured. Please try again later.');
          return;
        });

      dal.insertData(db.transaction, body)
        .catch((err) => {
          res.status(500).message('Error occoured. Please try again later.');
          return;
        });
    }
    if (!res.statusCode) {
      res.send(200);
    }
  }
};
