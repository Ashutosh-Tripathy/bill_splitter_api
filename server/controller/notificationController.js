import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;

export const getNotifications = (req, res) => {
  const userId = req.params.userId;
  logger.info(`get notification: ${userId}`);
  const condition = {
    to: {
      [Op.eq]: userId
    }
  };
  dal.findByCondition(db.notification, condition)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const countNewNotification = (req, res) => {
  const userId = req.params.userId;
  logger.info(`count new notification: ${userId}`);
  const condition = {
    to: {
      [Op.eq]: userId
    },
    status:1
  };
  dal.count(db.notification, condition)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const insertNotification = (req, res) => {
  const body = dal.convertObject(req.body, 'notification', 'post');
  logger.info(`post notification: ${body}`);

  dal.insertData(db.notification, body)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};
