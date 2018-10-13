'use strict'
// import authenticate from './routes/authenticate';
import appuserRoutes from './routes/appuser';
import friendRequestRoutes from './routes/friendRequest';
import notificationRoutes from './routes/notification';
import transactionRoutes from './routes/transaction';

const routes = [
    appuserRoutes,
    friendRequestRoutes,
    notificationRoutes,
    transactionRoutes
];

// Add access to the app and db objects to each route
const app_router = (router, db) => {
    return routes.forEach((route) => {
        route(router, db);
    });
};

export default app_router;