import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;

export const getFriends = (req, res) => {
  const userId = req.params.userId;
  logger.info(`get friendRequest: ${userId}`);
  const condition = {
    to: {
      [Op.eq]: userId
    }
  };
  dal.findByCondition(db.friendRequest, condition)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const countNewFriendRequest = (req, res) => {
  const userId = req.params.userId;
  logger.info(`count new friendRequest: ${userId}`);
  const condition = {
    to: {
      [Op.eq]: userId
    },
    status:1
  };
  dal.count(db.friendRequest, condition)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};

export const insertFriendRequest = (req, res) => {
  const body = dal.convertObject(req.body, 'friendRequest', 'post');
  logger.info(`post friendRequest: ${body}`);

  dal.insertData(db.friendRequest, body)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};
