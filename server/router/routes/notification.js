'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const notificationRoutes= (router, db) => {
  router.get('/appuser/:userId/notifications', controller.getNotifications);
  router.get('/appuser/:userId/notification/count', controller.countTransaction);
  router.post('/appuser/:userId/notification', controller.insertTransaction);
};
export default notificationRoutes;
