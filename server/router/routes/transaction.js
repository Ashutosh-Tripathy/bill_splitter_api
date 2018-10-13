'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const transactionRoutes= (router, db) => {
  router.get('/appuser/:userId/transactions', controller.getTransactions);
  // router.get('/appuser/:userId/transaction/count', controller.countTransaction);
  router.post('/appuser/:userId/transaction', controller.insertTransaction);
};
export default transactionRoutes;
