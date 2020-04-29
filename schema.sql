DROP DATABASE IF EXISTS productDetails;

CREATE DATABASE productDetails;

Use productDetails;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT,
  why_we_made_this VARCHAR (1000) NOT NULL,
  designed_for VARCHAR (200) NOT NULL,
  features VARCHAR (1000) NOT NULL,
  materials VARCHAR (1000) NOT NULL,
  imgurl1 VARCHAR (200) NOT NULL,
  imgurl2 VARCHAR (200) NOT NULL,
  PRIMARY KEY (id)
);