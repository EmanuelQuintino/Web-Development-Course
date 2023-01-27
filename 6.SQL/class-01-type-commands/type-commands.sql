CREATE DATABASE school;
DROP DATABASE school;

USE school;

CREATE TABLE studants(
	named VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

DROP TABLE studants;

SELECT * FROM studants;
DESCRIBE studants;

INSERT INTO studants(named, age) VALUES("Samila", 18);
INSERT INTO studants VALUES('Emanuel', 30);
INSERT INTO studants(age, named) VALUES(16, 'Murilo');

SET SQL_SAFE_UPDATES = 1;

UPDATE studants SET age = 30 WHERE named = 'Emanuel';
DELETE FROM studants WHERE named = 'Emanuel';
-- DELETE FROM studants;

TRUNCATE studants;