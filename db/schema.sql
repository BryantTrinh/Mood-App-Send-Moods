DROP DATABASE IF EXISTS sendmoods_db;
CREATE DATABASE sendmoods_db;

USE sendmoods_db;
CREATE TABLE users (
user_id INT PRIMARY KEY,
first_name TEXT(20),
last_name TEXT(20),
email VARCHAR(50),
user_name TEXT(20),
user_password VARCHAR(200)
);

CREATE TABLE posts (
post_id INT AUTO_INCREMENT PRIMARY KEY,
post_body VARCHAR(999),
post_title VARCHAR(100),
post_date DATETIME,
anger BOOL,
confusion BOOL,
fear BOOL,
joy BOOL,
sadness BOOL
);

CREATE TABLE sessions (
session_id INT,
user_id INT PRIMARY KEY,
session_expires DATETIME
);