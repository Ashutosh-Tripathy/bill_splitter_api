import { getAppuser, insertAppuser } from './appuserController';
import { getFriendRequests, countFriendRequest, insertFriendRequest } from './friendRequestController';
import { getNotifications, countNotification, insertNotification } from './notificationController';
import { getTransactions, countNewTransaction, insertTransaction } from './transactionController';

export default {
    getAppuser, insertAppuser,
    getFriendRequests, countFriendRequest, insertFriendRequest,
    getNotifications, countNotification, insertNotification,
    getTransactions,  insertTransaction
};