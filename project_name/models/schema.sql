DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

ALTER TABLE product CHANGE COLUMN id product_id INTEGER;
ALTER TABLE distributor CHANGE COLUMN id distributor_id INTEGER;
ALTER TABLE retailer CHANGE COLUMN id retailer_id INTEGER;
