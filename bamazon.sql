DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
    id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DOUBLE(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3050i','Speakers','699.99','69');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics Concept 500','Speakers','5000.19','20');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3090ci','Speakers','189.29','182');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Marantz SR5012','Reciever','648.88','560');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Marantz SR6012','Reciever','799.99','60');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('LG OLED65C8PUA','TV','2796.99','12');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Tuft and Needle','Mattress','750.00','790');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Audio R8','Car','150000.00','1');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Gulfstream G650ER','Airplane','65000000.00','20');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Tesla Model X','Car','110000.00','32');