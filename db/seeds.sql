CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `price` float(11,2) DEFAULT '0.00',
  `description` varchar(255) NOT NULL,
  `stock` int(11) DEFAULT '0',
  `active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
); 



INSERT INTO products VALUES 
(1,'titos','Vodka',9.99,'taste good',10,1,'2017-11-01 03:20:53','2017-11-03 02:55:50'),
(2,'Ciroc','Vodka',9.99,'taste sweet',12,0,'2017-11-01 03:23:36','2017-11-03 02:56:03'),
(3,'Grey Goose','Vodka',9.99,'taste bitter',5,1,'2017-11-01 04:00:53','2017-11-03 15:04:12'),
(4,'Bacardi','rum',9.99,'taste sour',10,0,'2017-11-01 04:01:52','2017-11-03 02:55:43'),
(5,'Captain Morgan','rum', 4.99,'taste nasty',10,0,'2017-11-01 04:02:27','2017-11-03 02:55:56'),
(6,'Bud light','beer',0.99,'taste better',12,1,'2017-11-02 04:24:49','2017-11-03 02:34:39');
