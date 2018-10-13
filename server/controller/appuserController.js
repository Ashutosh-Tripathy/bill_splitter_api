import db from '../config/db';
import logger from '../logging/logger';
import dal from '../dal';

const Op = db.Sequelize.Op;
export const getAppuser = (req, res) => {
  const userId = req.params.userId;
  logger.info(`get appuser: ${userId}`);

  dal.findById(db.appuser, userId)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};


export const insertAppuser = (req, res) => {
  const body = dal.convertObject(req.body, 'appuser', 'post');
  logger.info(`post appuser: ${JSON.stringify(body)}`);

  dal.insertData(db.appuser, body)
    .then(({
      data,
      statusCode
    }) => {
      res.status(statusCode).json(data);
    });
};
