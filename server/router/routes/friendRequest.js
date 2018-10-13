'use strict';
// import logger from '../../logging/logger';
import controller from '../../controller';

const friendRequestRoutes= (router, db) => {
  router.get('/appuser/:userId/friendrequests', controller.getFriendRequests);
  router.get('/appuser/:userId/friendrequest/count', controller.countFriendRequest);
  router.post('/appuser/:userId/friendrequest', controller.insertFriendRequest);
};
export default friendRequestRoutes;
