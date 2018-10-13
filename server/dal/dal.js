import db from '../config/db';
import { resolve } from 'path';
import { throws } from 'assert';
import { reject } from 'rsvp';

const Op = db.Sequelize.Op;
const notFound = {
    data: {
        message: 'Resource not found.'
    },
    statusCode: 404
};
const serverError = {
    data: {
        message: 'Error occoured. Please try again later.'
    },
    statusCode: 500
};

export const findById = (model, id, whereCondition = {}) => new Promise((resolve, reject) => {
    model.findOne({
        where: Object.assign(whereCondition, {
            id: {
                [Op.eq]: id
            }
        })
    })
        .then(data => {
            if (!data) {
                resolve(notFound);
            } else {
                resolve({
                    data,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve(serverError));
});

// query='SELECT `order_detail`.`id`, `buyer_id` AS `buyerId`, `seller_id` AS `sellerId`, `status`, `note`, `order_detail`.`created_at`, `order_detail`.`updated_at`, `order_detail`.`deleted_at`, `buyer_id`, `seller_id` , u1.name as buyerName, u2.name AS sellerName FROM `order_detail` AS `order_detail` inner join `user_detail` AS u1 on order_detail.buyer_id = u1.id inner join `user_detail` AS u2 on order_detail.seller_id = u2.id WHERE ((`order_detail`.`deleted_at` IS NULL) AND (`order_detail`.`buyer_id` = :id OR `order_detail`.`seller_id` = :id)) ORDER BY `order_detail`.`created_at` DESC;'
// replacements = { status: 'active' }
export const findByRawQuery = (query, replacements) => new Promise((resolve, reject) => {
    db.sequelize.query(query, { replacements, type: db.sequelize.QueryTypes.SELECT })
        .then(data => {
            if (!data) {
                resolve(notFound);
            } else {
                resolve({
                    data,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve(serverError));
});

export const findByCondition = (model, condition, orderBy, include = []) => new Promise((resolve, reject) => {
    model.findAll({
        where: condition,
        order: orderBy || ['created_at'],
        include
    })
        .then(data => {
            if (!data) {
                resolve(notFound);
            } else {
                resolve({
                    data,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve(serverError));
});

export const count = (model, condition) => new Promise((resolve, reject) => {
    model.count({
        where: condition
    })
        .then(data => {
            if (!data) {
                resolve(notFound);
            } else {
                resolve({
                    data,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve(serverError));
});

export const insertData = (model, data) => new Promise((resolve, reject) => {
    model.create(data)
        .then(out => {
            if (!out) {
                resolve(serverError);
            } else {
                resolve({
                    data: out,
                    statusCode: 200,
                });
            }
        })
        .catch((err) => resolve(serverError));
});

export const updateById = (model, data, id, whereCondition = {}) => new Promise((resolve, reject) => {
    model.update(
        data, {
            where: Object.assign(whereCondition, {
                id: {
                    [Op.eq]: id
                }
            })
        })
        .then(out => {
            if (!out[0]) {
                resolve(notFound);
            } else {
                resolve({
                    data: out,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve(serverError));
});

export const deleteById = (model, id, whereCondition = {}) => new Promise((resolve, reject) => {
    model.destroy({
        where: Object.assign(whereCondition, {
            id: {
                [Op.eq]: id
            }
        })
    })
        .then(affectedRows => {
            if (!affectedRows) {
                resolve(notFound);
            } else {
                resolve({
                    data: affectedRows,
                    statusCode: 200
                });
            }
        })
        .catch((err) => resolve(serverError));
});

export const testFn = (model, id) => new Promise((resolve, reject) => {
    setTimeout(resolve({
        data: {
            2: 3
        },
        code: 200
    }), 1000);
});