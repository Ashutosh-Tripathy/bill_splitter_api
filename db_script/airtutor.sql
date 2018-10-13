-- SELECT `id`, `name`, `mobile`, `state_id`, `district_id`, `area`, `address`, `createdAt`, `updatedAt`, `created_at`, `updated_at`, `deleted_at`
-- FROM `user_detail` AS `user_detail`
-- WHERE ((`user_detail`.`deleted_at` > '2018-09-23 17:28:12.013 +00:00' OR `user_detail`.`deleted_at` IS NULL)
-- AND `user_detail`.`id` = '2') LIMIT 1;

-- INSERT INTO 'user_detail` (`id`, `name`, `mobile`, `state_id`, `district_id`, `area`, `address`, `createdAt`, `updatedAt`, `created_at`, `updated_at`, `deleted_at` )
-- FROM `user_detail` AS `user_detail`
-- WHERE ((`user_detail`.`deleted_at` > '2018-09-23 17:28:12.013 +00:00' OR `user_detail`.`deleted_at` IS NULL) AND `user_detail`.`id`
-- = '2') LIMIT 1;

Executing (default): CREATE TABLE IF NOT EXISTS `state` (`id` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL UNIQUE);
Executing (default): PRAGMA INDEX_LIST(`state`)
Executing (default): PRAGMA INDEX_INFO(`sqlite_autoindex_state_1`)
Executing (default): CREATE TABLE IF NOT EXISTS `district` (`id` INTEGER PRIMARY KEY, `name` VARCHAR(255) NOT NULL, `state_id` INTEGER NOT NULL REFERENCES `state` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE);
Executing (default): PRAGMA INDEX_LIST(`district`)
Executing (default): CREATE TABLE IF NOT EXISTS `user_detail` (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `name` VARCHAR(255), `mobile` INTEGER, `state_id` INTEGER NOT NULL REFERENCES `state` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `district_id` INTEGER NOT NULL REFERENCES `district` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `area` VARCHAR(255), `address` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, `deleted_at` DATETIME);
Executing (default): PRAGMA INDEX_LIST(`user_detail`)
Executing (default): CREATE TABLE IF NOT EXISTS `orderDetail` (`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`buyer_id` INTEGER NOT NULL REFERENCES `user_detail` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
`seller_id` INTEGER NOT NULL REFERENCES `user_detail` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE, `status` INTEGER DEFAULT 1,
`note` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, `deleted_at` DATETIME);
Executing (default): PRAGMA INDEX_LIST(`orderDetail`)

--------------------------------------------------------

SELECT `id`, `name`, `mobile`, `state_id`, `district_id`, `area`, `address`, `created_at`, `updated_at`, `deleted_at`
FROM `user_detail` AS `user_detail`
WHERE ((`user_detail`.`deleted_at` > '2018-09-23 17:33:45.484 +00:00'
OR `user_detail`.`deleted_at` IS NULL) AND `user_detail`.`id` = '2') LIMIT 1;

INSERT INTO user_detail (`name`, `mobile`, `state_id`, `district_id`, `area`, `address`, `created_at`, `updated_at`, `deleted_at`)
VALUES ('Ashutosh Tripathy', 9867917163, 35, 34, 'cv raman nagar', '3b classik retreat, 29b cross', '2018-09-23 17:33:45.484 +00:00', '2018-09-23 17:33:45.484 +00:00', NULL );

INSERT INTO user_detail (`name`, `mobile`, `state_id`, `district_id`, `area`, `address`, `created_at`, `updated_at`, `deleted_at`)
VALUES ('S Tripathy', 7317703772, 35, 34, 'cv raman nagar', '3b classik retreat, 29b cross', '2018-09-23 17:33:45.484 +00:00', '2018-09-23 17:33:45.484 +00:00', NULL );



INSERT INTO orderDetail ('buyer_id', 'seller_id', 'note', `created_at`, `updated_at`, `deleted_at`)
VALUES (1, 2, 'test note', '2018-09-23 17:33:45.484 +00:00', '2018-09-23 17:33:45.484 +00:00', NULL );



Executing (default): CREATE TABLE IF NOT EXISTS `orderDetail` (`id` INTEGER PRIMARY KEY AUTOINCREMENT,
`buyer_id` INTEGER NOT NULL REFERENCES `user_detail` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
`seller_id` INTEGER NOT NULL REFERENCES `user_detail` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
 `status` INTEGER DEFAULT 1,
`note` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, `deleted_at` DATETIME);