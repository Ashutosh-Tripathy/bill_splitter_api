import { getAppuser, insertAppuser } from './appuserController';
import { getFriends, countNewFriendRequest, insertFriendRequest } from './friendRequestController';
import { getNotifications, countNewNotification, insertNotification } from './notificationController';
import { getTransaction, countNewTransaction, insertTransaction } from './transactionController';

export default {
    getAppuser, insertAppuser,
    getFriends, countNewFriendRequest, insertFriendRequest,
    getNotifications, countNewNotification, insertNotification,
    getTransaction, countNewTransaction, insertTransaction
};