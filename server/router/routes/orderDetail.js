'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const appuserRoutes = (router, db) => {
  router.get('/appuser/:userId/orderdetail/:orderId', controller.getOrderDetail);
  router.post('/appuser/:userId/orderdetail', controller.insertOrderDetail);
  router.get('/appuser/:userId/orders', controller.getOrders);
  router.patch('/appuser/:userId/orderdetail/:orderId', controller.updateOrderDetail);
  //router.post('appuser', controller.createUserDetail);
};
export default appuserRoutes;