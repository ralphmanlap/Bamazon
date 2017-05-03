-- Creating database
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create Table of products
CREATE TABLE products
(
item_id int NOT NULL AUTO_INCREMENT,
product_name varchar(255) NOT NULL,
department_name varchar(255) NULL,
price decimal(10,2) NULL,
stock_quantity int(10) NULL,
PRIMARY KEY (item_id)
);

-- Inserting 10 different products
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Headphones', 'electronics', 24.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Laptop', 'electronics', 499.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Shampoo', 'beauty', 8.45, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Amazon Echo', 'electronics', 199.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Memory Foam Mattress', 'home', 289.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Storage Cabinet', 'home', 34.50, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Chelsea Boot', 'clothing', 71.95, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Floral Dress', 'clothing', 99.00, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Sneakers', 'clothing', 45.99, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Deoderant', 'beauty', 4.99, 45);

SELECT * FROM products;