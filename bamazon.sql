
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
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');
INSERT INTO products (product_name, department_name, price, stock_quantity) 
values ('Q Acoustics 3020i','Speakers','299.99','320');