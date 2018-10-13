const appuser = ['id', 'name', 'mobile', 'type', 'stateId', 'districtId', 'area', 'address', `created_at`, `updated_at`, `deleted_at`];
const postUserDetail = ['id', 'name', 'mobile', 'type', 'stateId', 'districtId', 'area', 'address'];
const orderDetail = ['id', 'buyerId', 'sellerId', 'status', 'note', `created_at`, `updated_at`, `deleted_at`];
const postOrderDetail = ['id', 'buyerId', 'sellerId', 'status', 'note'];
const patchOrderDetail = ['status'];

const objectMap = {
    'appuser': {
        default: appuser,
        post: postUserDetail
    },
    'orderDetail': {
        default: orderDetail,
        post: postOrderDetail,
        patch: patchOrderDetail
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