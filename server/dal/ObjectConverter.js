const appuser = ['id', 'email', 'name', 'mobile', `created_at`, `updated_at`, `deleted_at`];
const postAppuser = ['id', 'email', 'password', 'name', 'mobile', `created_at`, `updated_at`, `deleted_at`];
const friendRequest = ['id', 'from', 'to', 'status', `created_at`, `updated_at`, `deleted_at`];
const postFriendRequest = ['to'];
const notification = ['id', 'from', 'to', 'type', `created_at`, `updated_at`, `deleted_at`];
const transaction = ['id', 'spender', 'owner', 'amount', `comment`, `created_at`, `updated_at`, `deleted_at`];
const postTransaction = ['owers', 'amount', `comment`];

const objectMap = {
    'appuser': {
        default: appuser,
        post: postAppuser
    }, 'friendRequest': {
        default: friendRequest,
        post: postFriendRequest
    }, 'notification': {
        default: notification,
    }, 'transaction': {
        default: transaction,
        post: postTransaction
    }
};

const convertObject = (data, objectType, requestType = 'get') => {
    const result = {};
    // let allowedKeys = Object.keys(data);
    let allowedKeys = (objectMap[objectType][requestType] || objectMap[objectType].default);
    // if (requestType != 'get') {
    //     allowedKeys = allowedKeys.filter(key => !key.endsWith('_at'));
    // }
    // console.log(allowedKeys);
    // console.log(data);
    console.log(data);
    console.log(allowedKeys);
    console.log(requestType);

    const filtered = Object.keys(data)
        .filter(key => allowedKeys.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    console.log(filtered);
    return filtered;
};

export default convertObject;