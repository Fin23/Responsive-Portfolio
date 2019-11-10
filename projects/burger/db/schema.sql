  --  * Create the `burgers_db`.
  --  * Switch to or use the `burgers_db`.
  --  * Create a `burgers` table with these fields:
  --    * **id**: an auto incrementing int that serves as the primary key.
  --    * **burger_name**: a string.
  --    * **devoured**: a boolean.



     -- Database Creation
CREATE DATABASE burgers_db;

USE burgers_db;

-- Table Creation
CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NULL,
devoured BOOLEAN DEFAULT false

PRIMARY KEY (id)
);