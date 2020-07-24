### Schema

DROP DATABASE IF EXISTS sushi_db;
CREATE DATABASE sushi_db;
USE sushi_db;

CREATE TABLE sushi
(
	id int NOT NULL AUTO_INCREMENT,
	sushi_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
