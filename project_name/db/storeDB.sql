CREATE DATABASE IF NOT EXISTS `storedb` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `storedb`;




DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `price` float(11,2) DEFAULT '0.00',
  'description' varchar(255) NOT NULL,
  `stock` int(11) DEFAULT '0',
  `active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
DROP DATABASE IF EXISTS `storedb`;
CREATE DATABASE `storedb`;
USE `storedb`;
