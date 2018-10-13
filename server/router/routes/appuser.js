'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const appuserRoutes= (router, db) => {
  router.get('/appuser/:userId', controller.getAppuser);
  router.post('/appuser', controller.insertAppuser);
  //router.post('appuser', controller.createUserDetail);
};
export default appuserRoutes;