'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const appuserRoutes= (router, db) => {
  router.get('/appuser/:userId', controller.getUserDetail);
  router.post('/appuser', controller.insertUserDetail);
  //router.post('appuser', controller.createUserDetail);
};
export default appuserRoutes;