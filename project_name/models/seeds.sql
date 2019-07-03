-- CUSTOMER 11111
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (11111, 01, 'Tequila', 'Clear liquor from Mexico', 5, 49.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (11111, 02, 'Whiskey', 'Dark liquor', 8, 39.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (11111, 03, 'Wine', 'Something you drink with your pinky up', 10, 19.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (11111, 05, 'Beer', 'A lot of liquid with low alcohol percentage', 30, 12.99);

-- CUSTOMER 22222
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (22222, 01, 'Tequila', 'Clear liquor from Mexico', 12, 49.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (22222, 02, 'Whiskey', 'Dark liquor', 15, 39.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (22222, 03, 'Wine', 'Something you drink with your pinky up', 25, 19.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (22222, 04, 'Vodka', 'Clear liquor made every where else', 15, 29.99);
INSERT INTO Retailer (retailer_id, product_id, product_name, product_description, quantity_needed, unit_price) 
    VALUES (22222, 05, 'Beer', 'A lot of liquid with low alcohol percentage', 30, 12.99); 

-- DISTRIBUTOR 123456
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (123456, 01, 'Tequila', 'Clear liquor from Mexico', 100, 15);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (123456, 02, 'Whiskey', 'Dark liquor', 150, 10);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (123456, 03, 'Wine', 'Something you drink with your pinky up', 200, 8);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (123456, 04, 'Vodka', 'Clear liquor made every where else', 200, 10);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (123456, 05, 'Beer', 'A lot of liquid with low alcohol percentage', 300, 5);

-- DISTRIBUTOR 567890
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (567890, 01, 'Tequila', 'Clear liquor from Mexico', 200, 14);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (567890, 02, 'Whiskey', 'Dark liquor', 100, 9);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (567890, 03, 'Wine', 'Something you drink with your pinky up', 100, 7);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (567890, 04, 'Vodka', 'Clear liquor made every where else', 150, 9);
INSERT INTO Distributor (distributor_id, product_id, product_name, product_description, quantity_available, unit_price) 
    VALUES (567890, 05, 'Beer', 'A lot of liquid with low alcohol percentage', 250, 4);

INSERT INTO Product (product_id, product_name, product_description) 
    VALUES (01, 'Tequila', 'Clear liquor from Mexico');
INSERT INTO Product (product_id, product_name, product_description) 
    VALUES (02, 'Whiskey', 'Dark liquor');
INSERT INTO Product (product_id, product_name, product_description) 
    VALUES (03, 'Wine', 'Something you drink with your pinky up');
INSERT INTO Product (product_id, product_name, product_description) 
    VALUES (04, 'Vodka', 'Clear liquor made every where else');
INSERT INTO Product (product_id, product_name, product_description) 
    VALUES (05, 'Beer', 'A lot of liquid with low alcohol percentage');