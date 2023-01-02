

USE moods_db;
CREATE TABLE users (
user_id INT AUTO_INCREMENT PRIMARY KEY,
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
post_day INT,
post_month INT,
post_year INT,
anger BOOL,
confusion BOOL,
fear BOOL,
joy BOOL,
sadness BOOL
);

CREATE TABLE sessions (
session_id INT PRIMARY KEY,
user_id INT,
session_expires DATETIME
);